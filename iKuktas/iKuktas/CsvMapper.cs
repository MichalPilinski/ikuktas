using System;
using System.Collections.Generic;
using System.Configuration;
using System.Globalization;
using System.IO;
using System.Linq;

namespace iKuktas
{
    public class CsvMapper: ICsvMapper
    {
        public RawTemperatureModel GetLatestRow()
        {
            var lastLine = File.ReadLines("./temperatures.csv").Tail(1);
            var lastLineArr = lastLine.First().Split(',');

            return MapToModel(lastLineArr);
        }

        private RawTemperatureModel MapToModel(string[] rawArray)
        {
            var dateTime = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
            try
            {
                dateTime = dateTime.AddSeconds(int.Parse(rawArray[0])).ToLocalTime();
            }
            catch (Exception)
            {
                // do not rethrow - ignore
            }

            return new RawTemperatureModel()
            {
                TimeStamp = dateTime,
                RightBottomTemp = float.Parse(rawArray[1], CultureInfo.InvariantCulture),
                RightMiddleTemp = float.Parse(rawArray[2], CultureInfo.InvariantCulture),
                RightTopTemp = float.Parse(rawArray[3], CultureInfo.InvariantCulture),
                LeftMiddleTemp = float.Parse(rawArray[4], CultureInfo.InvariantCulture),
                LeftTopTemp = float.Parse(rawArray[5], CultureInfo.InvariantCulture)
            };
        }

        public IEnumerable<RawTemperatureModel> GetRows(int count)
        {
            var data = File.ReadAllLines("./temperatures.csv");
            return data.Tail(count).Select(t => t.Split(',')).Select(t => MapToModel(t));
        }

        public GraphModel GetGraphModel(int rows, int maxPoints = 100)
        {
            var data = GetRows(rows).ToList(); // month of data
            var step = (data.Count * 1f) / maxPoints; // we only want max 100 point 

            if (step < 1) step = 1;

            var maxIter = data.Count > maxPoints ? maxPoints : data.Count;

            var graphModel = new GraphModel();
            for (var i = 0; i < maxIter; i++)
            {
                var index = (int)(i * step);
                graphModel.LeftMiddleTemps.Add(data[index].LeftMiddleTemp);
                graphModel.LeftTopTemps.Add(data[index].LeftTopTemp);

                graphModel.RightBottomTemps.Add(data[index].RightBottomTemp);
                graphModel.RightMiddleTemps.Add(data[index].RightMiddleTemp);
                graphModel.RightTopTemps.Add(data[index].RightTopTemp);

                graphModel.TimeStamps.Add(data[index].TimeStamp);
            } 

            return graphModel;
        }

        public ExtendedTemperatureModel GetExtendedRow()
        {
            var lastHourRows = GetGraphModel(18);
             
            return new ExtendedTemperatureModel(lastHourRows);
        }
    }
}

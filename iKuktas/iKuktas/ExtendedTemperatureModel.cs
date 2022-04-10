using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace iKuktas
{
    public class ExtendedTemperatureModel
    {
        public ExtendedSensorModel RightTopTemp { get; set; }

        public ExtendedSensorModel RightMiddleTemp { get; set; }

        public ExtendedSensorModel RightBottomTemp { get; set; }

        public ExtendedSensorModel LeftMiddleTemp { get; set; }

        public ExtendedSensorModel LeftTopTemp { get; set; }
    
        public ExtendedTemperatureModel(GraphModel hourGraphData)
        {
            var timestamp = hourGraphData.TimeStamps.Last();

            RightTopTemp = new ExtendedSensorModel(hourGraphData.RightTopTemps, timestamp);
            RightMiddleTemp = new ExtendedSensorModel(hourGraphData.RightMiddleTemps, timestamp);
            RightBottomTemp = new ExtendedSensorModel(hourGraphData.RightBottomTemps, timestamp);
            LeftMiddleTemp = new ExtendedSensorModel(hourGraphData.LeftMiddleTemps, timestamp);
            LeftTopTemp = new ExtendedSensorModel(hourGraphData.LeftTopTemps, timestamp);
        }
    }
}

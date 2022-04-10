using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace iKuktas
{
    public class ExtendedSensorModel
    {
        public DateTime TimeStamp { get; set; }
        
        public float Temperature { get; set; }
        
        public float HourAverage { get; set; }

        public float HourPrediction { get; set; }

        public ExtendedSensorModel(List<float> hourData, DateTime timeStamp)
        {
            TimeStamp = timeStamp;

            Temperature = hourData.Last();
            HourAverage = hourData.Average();
            HourPrediction = GetPrediction(hourData);
        }

        private float GetPrediction(List<float> hourData)
        {
            return (2 * hourData.Last()) - hourData.First(); 
        }
    }
}

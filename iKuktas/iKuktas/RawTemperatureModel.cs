using System;

namespace iKuktas
{
    public class RawTemperatureModel
    {
        public DateTime TimeStamp { get; set; }

        public float RightTopTemp { get; set; }

        public float RightMiddleTemp { get; set; }

        public float RightBottomTemp { get; set; }

        public float LeftMiddleTemp { get; set; }

        public float LeftTopTemp { get; set; }
    }
}

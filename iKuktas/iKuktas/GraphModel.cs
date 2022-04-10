using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace iKuktas
{
    public class GraphModel
    {
        public List<DateTime> TimeStamps { get; set; }

        public List<float> RightTopTemps { get; set; }

        public List<float> RightMiddleTemps { get; set; }

        public List<float> RightBottomTemps { get; set; }

        public List<float> LeftMiddleTemps { get; set; }

        public List<float> LeftTopTemps { get; set; }

        public GraphModel()
        {
            TimeStamps = new List<DateTime>();
            RightTopTemps = new List<float>();
            RightMiddleTemps = new List<float>();
            RightBottomTemps = new List<float>();
            LeftMiddleTemps = new List<float>();
            LeftTopTemps = new List<float>();
        }
    }
}

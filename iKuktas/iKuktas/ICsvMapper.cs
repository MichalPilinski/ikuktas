using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace iKuktas
{
    public interface ICsvMapper
    {
        RawTemperatureModel GetLatestRow();
        IEnumerable<RawTemperatureModel> GetRows(int count);
        GraphModel GetGraphModel(int rows, int maxPoints = 100);
        ExtendedTemperatureModel GetExtendedRow();
    }
}

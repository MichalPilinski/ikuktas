using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace iKuktas.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TemperatureController : ControllerBase
    {
        private readonly ICsvMapper csvMapper;
        public TemperatureController(ICsvMapper csvMapper)
        {
            this.csvMapper = csvMapper;
        }

        [HttpGet("summary")]
        public ActionResult<RawTemperatureModel> Get()
        {
            return Ok(csvMapper.GetLatestRow());
        }

        [HttpGet("graphMonth")]
        public ActionResult<GraphModel> GetGraphMonthData()
        {
            var graphModel = csvMapper.GetGraphModel(9000, 100);

            return Ok(graphModel);
        }

        [HttpGet("graphDay")]
        public ActionResult<GraphModel> GetGraphDayData()
        {
            var graphModel = csvMapper.GetGraphModel(288, 100);

            return Ok(graphModel);
        }

        [HttpGet("extended")]
        public ActionResult<ExtendedTemperatureModel> GetExtendedData()
        {
            return Ok(csvMapper.GetExtendedRow());
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Sparkr.Models;
using Sparkr.Refit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sparkr.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PublicApiController : ControllerBase
    {
        private readonly IPublicApiApi _api;

        private readonly ILogger<PublicApiController> _logger;

        protected string BaseDomain { get; }

        public PublicApiController(IPublicApiApi api, ILogger<PublicApiController> logger)
        {
            this._api = api;
            this._logger = logger;
        }

        [HttpGet("GetRandomPublicApiEntry")]
        public async Task<PublicApiEntry> GetRandomPublicApiEntry()
        {
            PublicApiEntryList publicApiEntry;

            publicApiEntry = await _api.GetRandomPublicApiAsync();

            return publicApiEntry.Entries.ElementAt(0);
        }
    }
}

using Refit;
using Sparkr.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sparkr.Refit
{
    public interface IPublicApiApi
    {
        [Get("/random")]
        Task<PublicApiEntryList> GetRandomPublicApiAsync();
    }
}

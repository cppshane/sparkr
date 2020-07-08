using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sparkr.Models
{
    public class PublicApiEntry
    {
        public string API { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string Auth { get; set; }
        public string Cors { get; set; }
        public string Link { get; set; }
        public bool HTTPS { get; set; }
    }
}

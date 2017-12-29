using System.Web;
using System.Web.Optimization;

namespace Khatabahi
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            
                        
            bundles.Add(new ScriptBundle("~/bundles/scripts").IncludeDirectory("~/Scripts", "*.js", true));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.           

            bundles.Add(new StyleBundle("~/Content/css").IncludeDirectory("~/Content","*.css",true));
        }
    }
}

using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.ServiceModel;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebCRM.Pages
{
    public class TestModel : PageModel
    {
        public void OnGet()
        {

        }

        public async Task<IActionResult> OnPostAsync()
        {
            BasicHttpBinding httpBinding = new BasicHttpBinding();
            httpBinding.MaxReceivedMessageSize = Int32.MaxValue;
            httpBinding.MaxBufferSize = Int32.MaxValue;
            
            wsErp.wsdbSoapClient client = new wsErp.wsdbSoapClient(httpBinding,
                new EndpointAddress("http://localhost/wssyncdb/wsdb.asmx"));

            wsErp.wsCliente cliente = new wsErp.wsCliente()
            { Nombres = "Leonardo" };

            var res = await client.PutClienteAsync(cliente);

            //client.Endpoint.Address = "";
            return Page();
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using CRM.Models;
using WebCRM.Data;

namespace WebCRM.Pages.Actividad
{
    public class EditModel : PageModel
    {
        private readonly WebCRM.Data.dmscrmContext _context;

        public EditModel(WebCRM.Data.dmscrmContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Actividad Actividad { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Actividad = await _context.Actividad.FirstOrDefaultAsync(m => m.IdActividad == id);

            if (Actividad == null)
            {
                return NotFound();
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Attach(Actividad).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ActividadExists(Actividad.IdActividad))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return RedirectToPage("./Index");
        }

        private bool ActividadExists(int id)
        {
            return _context.Actividad.Any(e => e.IdActividad == id);
        }
    }
}

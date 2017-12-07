using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace fb_page_creator
{
    public partial class Form1 : Form
    {
        Badge current = null;
        public Form1()
        {
            InitializeComponent();
            cmbBadges.Items.AddRange(Badge.GetBadges());
            if (cmbBadges.Items.Count > 0) LoadBadge(0);
        }

      
        private void btnClose_Click(object sender, EventArgs e)
        {
            Close();
        }

        private void btnNew_Click(object sender, EventArgs e)
        {
            var b = Badge.NewBadge();
            LoadBadge(cmbBadges.Items.Add(b));
        }

        private void LoadBadge(int index)
        {
            var b = (Badge)cmbBadges.Items[index];
            cmbBadges.SelectedIndex = index;
            current = b;
            txtFBDescr.Text = b.FBDescr;
            txtName.Text = b.Name;
            txtTitle.Text = b.Title;
            txtWebDescr.Text = b.WebDescr;
        }

        private void cmbBadges_SelectedIndexChanged(object sender, EventArgs e)
        {
            LoadBadge(cmbBadges.SelectedIndex);
        }

        private void btnGenerate_Click(object sender, EventArgs e)
        {           
            if (Save())
            {
                foreach (Badge b in cmbBadges.Items)
                {
                    b.Generate();
                }
                MessageBox.Show("Done");
            }
        }

        private void btnSave_Click(object sender, EventArgs e)
        {
            Save();
           
        }

        private bool Save()
        {
            if (current == null)
            {
                MessageBox.Show("Please select a badge.");
                return false;
            }
            else
            {
                current.FBDescr = txtFBDescr.Text;
                current.Name = txtName.Text;
                current.Title = txtTitle.Text;
                current.WebDescr = txtWebDescr.Text;
                current.Generate();
                return true;
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.IO;

namespace fb_page_creator
{
    public class Badge
    {
        static string docpath = "badges.xml";
        static XmlDocument doc = null;

        static Badge()
        {
            doc = new XmlDocument();
            if ( File.Exists(docpath))
            {
                doc.Load(docpath);
            }
            else
            {
                doc.LoadXml("<badges />");
                doc.Save(docpath);
            }
        }

        public static Badge[] GetBadges()
        {
            var badgeNodes = doc.SelectNodes("//badge");
            var l = badgeNodes.Count;
            var badges = new Badge[l];
            for (int i = 0; i < l; i++)
                badges[i] = new Badge(badgeNodes[i]);
            return badges;
        }

        public static Badge NewBadge()
        {
            var elm = doc.CreateElement("badge");
            doc.DocumentElement.AppendChild(elm);
            CreateChild(elm, "name").InnerText = "New Badge";
            CreateChild(elm, "title").InnerText = "My Title";
            CreateChild(elm, "fb-descr").InnerText = "Facebook description";
            CreateChild(elm, "web-descr").InnerText = "Web description";
            return new Badge(elm);
        }

        public static XmlElement CreateChild(XmlNode parent, string childName)
        {
            var elm = doc.CreateElement(childName);
            parent.AppendChild(elm);
            return elm;
        }

        XmlNode node;

        public string Name { get; set; }
        public string Title { get; set; }
        public string FBDescr { get; set; }
        public string WebDescr { get; set; }

        private Badge(XmlNode node)
        {
            this.node = node;
            Name = GetText("name");
            Title = GetText("title");
            FBDescr = GetText("fb-descr");
            WebDescr = GetText("web-descr");
        }

        private string GetText(string v)
        {
           return  node.SelectSingleNode(v).InnerText;
        }

        public void Save()
        {
            SetText("name", Name);
            SetText("title", Title);
            SetText("fb-descr", FBDescr);
            SetText("web-descr", WebDescr);
            doc.Save(docpath);
        }

        private void SetText(string name, string value)
        {
            node.SelectSingleNode(name).InnerText = value;
        }

        public override string ToString()
        {
            return Name;
        }

        internal void Generate()
        {
            Save();
            var html = Properties.Resources.badgeHtml;
            html = html.Replace("{NAME}", Name);
            html = html.Replace("{TITLE}", Title);
            html = html.Replace("{FB_DESCR}", FBDescr);
            html = html.Replace("{WEB_DESCR}", WebDescr);

            var id = $"{DateTime.Now.Year}{DateTime.Now.DayOfYear}{DateTime.Now.Hour}{DateTime.Now.Minute}{DateTime.Now.Second}";
            html = html.Replace("{TS}", id);
            File.WriteAllText(Name + ".html", html);
        }
    }
}

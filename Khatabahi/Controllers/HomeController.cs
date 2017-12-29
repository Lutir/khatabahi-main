using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Khatabahi.Models;

namespace Khatabahi.Controllers
{
    public class HomeController : Controller
    {
        KhatabahiEntities db = new KhatabahiEntities();
        public ActionResult Index()
        {
            //getting products from database
            var getProducts = from products in db.products
                              select products;
            ArrayList list = new ArrayList();
            List<product> ProductsList = new List<product>();
            foreach (product product in getProducts)
            {
                var item = new product()
                {
                    ProductID = product.ProductID,
                    ProductName = product.ProductName,
                    ProductSubHead = product.ProductSubHead,
                    ProductDetail = product.ProductDetail,
                    img = product.img,
                    cost = product.cost,
                    ProductType = product.ProductType,
                    ProductPdf = product.ProductPdf,
                    Validity = product.Validity
                };
                ProductsList.Add(item);
            }
            list.Add(ProductsList);
            //getting features from database
            List<feature> FeaturesList = new List<feature>();
            var getFeatures = from feature in db.features
                              select feature;
            foreach (feature feature in getFeatures)
            {
                var item = new feature()
                {
                    FeatureID = feature.FeatureID,
                    FeatureName = feature.FeatureName,
                    FeatureDetail = feature.FeatureDetail,
                    img = feature.img,
                };
                FeaturesList.Add(item);
            }
            list.Add(FeaturesList);
            //getting product categories from database
            List<product_categ> CategList = new List<product_categ>();
            var getCateg = from product_categ in db.product_categ
                           select product_categ;
            foreach (product_categ categ in getCateg)
            {
                var item = new product_categ()
                {
                    CategName = categ.CategName,
                    CategOrder = categ.CategOrder
                };
                CategList.Add(item);
            }
            list.Add(CategList);

            ViewBag.myList = list;
            ViewBag.tel = list.Count;

            return View();
        }

        public ActionResult About()
        {            
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }       

        [HttpPost]
        public JsonResult GetProductDetail(int id)
        {            
            var prod = from m in db.products
                         where m.ProductID == id
                         select m;

            return Json(prod);
        }

        [HttpPost]
        public JsonResult FeedbackForm(string name, string email, string mobile, string message)
        {
            var prod = name + email + mobile + message;
            DataContext
            return Json(prod);
        }


    }
}
fetch("https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false").then((response) => {
    return response.json();
}).then((data) => {
    console.log(data)
}) 

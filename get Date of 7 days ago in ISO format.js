let d=new Date();
let sevenDaysAgo=d.setDate(d.getDate()-7);
sevenDaysAgo=new Date(sevenDaysAgo).toISOString().slice(0,10);
let todayDate=new Date().toISOString().slice(0,10);

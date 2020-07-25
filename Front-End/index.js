function pageMaker(x,y,l){
    var cards ="";
    for (let i = x; i < x+y && i<l ; i++) {
      if(i%2==0){
          var but_style="btn-primary"
          var but="اضافه شدن به آزمون"
      }
      else{
          var but_style="btn-danger"
          var but="تمام شده"
      }
      cards += `
      <div class="col-lg-4 col-sm-6 col-xs-12">
          <div class="card  mb-1 mt-1 ml-0 mr-0 cardThem">
            <div class="card-body">
              <h5 class="card-title">{exam_name}${i+1}</h5>
              <p class="card-text">مخصوص پایه {exam_grade} </p>
              <p class="card-text">{qus_n}سواله</p>
              <p class="card-text">تاریخ برگزار: {exam_date}</p>
              
                <div id="token-error-${i+1}" class="error-token mb-2">
                  <p class="card-text">{exam_dis}</p>
                </div>
              
              <div class="text-left"><a id="btn-${i+1}" class="text-light btn ${but_style} btn-enter">${but}</a></div>
              <div class="verify" id="verify-${i+1}">
                <div class="input-group mb-3 ltr">
                  <div class="input-group-prepend">
                    <button id="sbtm-${i+1}" class="btn btn-primary rounded-left border-3" type="button">برسی</button>
                  </div>
                   <input id="inp-${i+1}" type="text" class="form-control" placeholder="کد ورود" aria-label="" aria-describedby="basic-addon1">
                </div>
             </div>
            </div>
          </div>
      </div>
      `
    }

  $("#exam-cards").html(cards);
}

function btn_enter(x,y){
  for (let i = x; i < x+y; i++) {
    $(`#btn-${i+1}`).click(function(){
      $(`.bg-error`).hide()
      for (let j = 0; j < 100; j++){
        $(`#token-error-${j+1}`).html(`
              <p class="card-text">{exam_dis}</p>
          `)
      }
      $(".btn-enter").show()
      
        if(1) {
            $(".verify").hide()
            $(this).hide();
            $(`#verify-${i+1}`).css("display","inline");
        }
        else{
        }
    });
  }
}

function verify_chek(x,y){
  for (let i = x; i < x+y; i++) {
    $(`#sbtm-${i+1}`).click(function(){
      if(1){
  
        $(`#token-error-${i+1}`).html(`
        <div class="rounded-lg bg-error">
            <b class="mr-4">کد نامعتبر</b>
            <p class="ml-3 mr-3 error-t">برای دریافت کد ورود به آزمون باید به اکانت<a class="btn btn-link error-t-l mb-1 mr-0" href="https://t.me/choobkhat_admin">تلگرام چوب خط</a>پیام دهید</p>
        </div>
        `);
      }
      else{
  
      }
    });
  }
}

function paginationMaker(z,l,y) {
  pagin=` <li id="pagin-1" class="page-item"><a class="page-link" href="#">First</a></li>`
  if(z>1 && z<(l+(y-l%y)%y)/y){ 
    n=z-2;
  }
  else if(z==1){
    n=0;
  }
  else{
    n=(l+(y-l%y)%y)/y-3;
  }
  for (let i = n; i < n+3; i++) {
    pagin+=`
      <li id="pagin-${i+1}" class="page-item"><a class="page-link" href="#">${i+1}</a></li>
    `
  }
  pagin+=` <li id="pagin-${(l+(y-l%y)%y)/y}" class="page-item"><a class="page-link" href="#">Last</a></li>`
  $(`#pagination-bar`).html(pagin);
}

function paginBtn(l,y){
  for (let i = 0; i < (l+(y-l%y)%y)/y; i++) {
    $(`#pagin-${i+1}`).click(function(){
        pageMaker((i)*y,y,l);
        btn_enter((i)*y,y);
        verify_chek((i)*y,y);
        paginationMaker(i+1,l,y);
        paginBtn(l,y);
    });
  }
}


$(document).ready(function(){
  pageMaker(0,9,100);
  btn_enter(0,9);
  verify_chek(0,9);
  paginationMaker(1,100,9);
  paginBtn(100,9);
});


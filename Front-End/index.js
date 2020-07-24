
var cards ="";
for (let i = 0; i < 100; i++) {

    // if(i%6==0){
    //   cards+=`
    //   <div id="page-${((i-i%6)/6)+1}" class="col-12 rtl ppage">
    //   `
    // }

    if(i%2==0){
        var but_style="btn-primary"
        var but="اضافه شدن به آزمون"
    }
    else{
        var but_style="btn-danger"
        var but="تمام شده"
    }
    cards += `
    <div class="col-sm-4">
          <div class="card  mb-1 mt-1 ml-1 mr-1 cardThem">
            <div class="card-body">
              <h5 class="card-title">{exam_name}</h5>
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
    // if(i%6==0){
    //   cards+=`</div>`
    // }
}

$("#exam-cards").append(cards);




for (let i = 0; i < 100; i++) {
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

for (let i = 0; i < 100; i++) {
  $(`#sbtm-${i+1}`).click(function(){
    if(1){

      $(`#token-error-${i+1}`).html(`
      <div class="rounded-lg bg-error border border-3 border-danger">
          <b class="mr-3">کد نامعتبر</b>
          <p class="mr-2">برای دریافت کد ورود به آزمون باید به اکانت<span class="btn btn-link">تلگرام چوب خط</span>پیام دهید </p>
      </div>
      `);
    }
    else{

    }
  });
}
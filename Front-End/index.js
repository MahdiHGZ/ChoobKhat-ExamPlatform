
var cards="";
for (let i = 0; i < 100; i++) {
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
              <pre class="card-text">{exam_dis}</pre>
              <div class="text-left"><a id="btn-${i+1}" class="text-light btn ${but_style} btn-enter">${but}</a></div>

            <div class="verify" id="verify-${i+1}">
              <div class="input-group mb-3 ltr">
                <div class="input-group-prepend">
                  <button id="cbtm-${i+1}" class="btn btn-primary rounded-left border-3" type="button">برسی</button>
                </div>
                <input id="inp-${i+1}" type="text" class="form-control" placeholder="کد ورود" aria-label="" aria-describedby="basic-addon1">
              </div>
            </div>
            </div>
            </div>
          </div>
    `
}

$("#exam-cards").append(cards);

for (let i = 0; i < 100; i++) {
    $(`#btn-${i+1}`).click(function(){
        if(1) {
            $(".btn-enter").show()
            $(".verify").hide()
            $(this).hide();
            $(`#verify-${i+1}`).css("display","inline");
        }
        else{
        }
    });
}


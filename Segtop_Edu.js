let exam_name = {
          data:[
                    {
                              examName:'Waec',
                              examSession:'feb - aug',
                              tutorialStatus:'available',
                              form:'unavailable',
                              confirm:'Authenticated By S E C',
                              img:'Seg_Img/FlyerWithExamWa.jpg',
                    },
                    {
                              examName:'Neco',
                              examSession:'feb - aug',
                              tutorialStatus:'available',
                              form:'unavailable',
                              confirm:'Authenticated By S E C',
                              img:'Seg_Img/neco.jpeg',
                    },
                    {
                              examName:'Waec gce',
                              examSession:'feb - aug',
                              tutorialStatus:'available',
                              form:'unavailable',
                              confirm:'Authenticated By S E C',
                              img:'Seg_Img/FlyerWithExamGce.jpg',
                    },
                    {
                              examName:'neco gce',
                              examSession:'feb - aug',
                              tutorialStatus:'running',
                              form:'expired',
                              confirm:'Authenticated By S E C',
                              img:'Seg_Img/FlyerWithExamGce.jpg',
                    },
                    {
                              examName:'utme',
                              examSession:'feb - aug',
                              tutorialStatus:'available',
                              form:'unavailable',
                              confirm:'Authenticated By S E C',
                              img:'Seg_Img/utme.jpeg',
                    },
                    {
                              examName:'putme',
                              examSession:'feb - aug',
                              tutorialStatus:'available',
                              form:'unavailable',
                              confirm:'Authenticated By S E C',
                              img:'Seg_Img/FlyerWithExamPutme.jpg',
                    },
                    {
                              examName:'napteb',
                              examSession:'feb - aug',
                              tutorialStatus:'available',
                              form:'unavailable',
                              confirm:'Authenticated By S E C',
                              img:'Seg_Img/FlyerWithExamNabteb.jpg',
                    },
                    {
                              examName:'jupeb',
                              examSession:'feb - aug',
                              tutorialStatus:'available',
                              form:'unavailable',
                              confirm:'Authenticated By S E C',
                              img:'Seg_Img/FlyerWithExamJupeb.jpg',
                    },
                    {
                              examName:'Entrance ',                            
                              examSession:'feb - aug',
                              tutorialStatus:'available',
                              form:'unavailable',
                              confirm:'Authenticated By S E C',
                              img:'Seg_Img/bece.jpeg',
                    },
                    {
                              examName:'cbt',
                              examSession:'feb - aug',
                              tutorialStatus:'available',
                              form:'available',
                              confirm:'Authenticated By S E C',
                              img:'Seg_Img/sec3.jpeg',
                    },
              
          ]
}

window.onload = function(){
          showLessomnOffers()
}

function showLessomnOffers(){
     for(let i of exam_name.data){
          let eacth_box = document.createElement('div')
          eacth_box.classList.add('eacthBox')

          let rev_img_dec = document.createElement('img');
          rev_img_dec.classList.add('rev_img_dec');
          rev_img_dec.setAttribute('src', i.img);

          let eacth_box_for_text = document.createElement('div')
          eacth_box_for_text.classList.add('eacth_box_for_text')

          let the_lesson_name = document.createElement('h2')
          the_lesson_name.classList.add('theLessonName')
          the_lesson_name.innerText = i.examName;

          let exam_sesson = document.createElement('p')
          exam_sesson.classList.add('examSesson')
          exam_sesson.innerText ='Section/Duration: ' + 'Will Be Declare By Exam Official';

          let exam_form = document.createElement('p')
          exam_form.classList.add('exam_form')

          let exam_lesson = document.createElement('p')
          exam_lesson.classList.add('exam_lesson')

          let exam_confirm = document.createElement('p')
          exam_confirm.classList.add('exam_confirm')
          exam_confirm.innerText ='Active: '+ i.confirm;

          let exam_btn = document.createElement('button')
          exam_btn.classList.add('exam_btn')
          exam_btn.innerText ='Apply';

          eacth_box_for_text.appendChild(the_lesson_name)
          eacth_box_for_text.appendChild(exam_sesson)
          eacth_box_for_text.appendChild(exam_form)
          eacth_box_for_text.appendChild(exam_lesson)
          eacth_box_for_text.appendChild(exam_confirm)
          eacth_box_for_text.appendChild(exam_btn)

          
          eacth_box.appendChild(rev_img_dec);
          eacth_box.appendChild(eacth_box_for_text);

          let apply_container = document.getElementById('apply_container')
          apply_container.appendChild(eacth_box);

          let examTY = document.getElementById('examTY');
          let exTy = document.getElementById('exTy');
          let make_enquiries_box = document.getElementById('make_enquiries_box')
          exam_btn.addEventListener('click', function(){
               examTY.innerText = i.examName;
               exTy.innerText = i.examName;
               make_enquiries_box.style.display = 'block';
          })

          let enquiryActionBtn  = document.getElementById('enquiryActionBtn');
          enquiryActionBtn.addEventListener('click', ()=>{
               make_enquiries_box.style.display = 'none';
          })
    }
}

// show wen user clicks about us btn
let showWenUserClickAboutUs = document.getElementById('showWenUserClickAboutUs')
function showAboutSeg(){
     showWenUserClickAboutUs.style.bottom = '0%';
}

let about_us = document.getElementById('about_us');

window.addEventListener('mouseup', function(event){
if (event.target != showWenUserClickAboutUs && event.target.children != about_us) {
    showWenUserClickAboutUs.style.visibility = 'visible'
    showWenUserClickAboutUs.style.bottom = "-100%";
}
})

function showUserAuthentication(){
   
          let the_pop_up = document.getElementById('the_show_authentication-box');
          let the_show_finish_box = document.getElementById('the_show_finish_box');
          let closeAll = document.getElementById('closeAll');
          let addName = document.getElementById('addName');

          addName.addEventListener('click', function(){
          let VisitorName = document.getElementById('VisitorName').value;
          let appearUserValue = document.getElementById('appearUserValue');
          let CloseAddName = document.getElementById('CloseAddName');
          appearUserValue.innerText ='Thank You '+ VisitorName + ' For Visiting (S E C)';

          the_pop_up.style.top = '0%';
          the_pop_up.style.display = 'none';
          the_pop_up.style.transform =' translate(-50%, -50%) scale(0)';


          the_show_finish_box.style.top = '20%';
          the_show_finish_box.style.display = 'block';
          the_show_finish_box.style.transform =' translate(-50%, -50%)';

          })


         closeAll.addEventListener('click', function(){
          the_show_finish_box.style.top = '0%';
          the_show_finish_box.style.display = 'none';
          the_show_finish_box.style.transform =' translate(-50%, -50%) scale(0)';
         })

         CloseAddName.addEventListener('click', function(){
         the_pop_up.style.top = '0%';
         the_pop_up.style.display = 'none';
         the_pop_up.style.transform =' translate(-50%, -50%) scale(0)';
         })

     
}

window.addEventListener('load', function(){

     showUserAuthentication();
    
     
})


// wen user clicks apply now this show display
let ApplyTheCourse = document.getElementById('ApplyTheCourse');
let apply_for_Course = document.getElementById('apply_for_Course')
ApplyTheCourse.addEventListener('click', ()=>{
apply_for_Course.style.display = 'block';
})
let backApplyForCourse = document.getElementById('backApplyForCourse')
backApplyForCourse.addEventListener('click', ()=>{
apply_for_Course.style.display = 'none';
})

let buttonOnChecOuts = document.querySelectorAll('.buttonOnChecOut');
buttonOnChecOuts.forEach(check => {
     check.addEventListener('click', ()=>{
          alert('This Is Available For EveryOne, Chat segtopclassic@gmail.com');
     })
});
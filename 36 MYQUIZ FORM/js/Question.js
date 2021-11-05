class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");

    this.button = createButton('Submit');
    this.button1=createButton("Next Question")

    this.question = createElement('h3');
    this.question1 = createElement('h3');
    

    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');

    this.option1Q2 = createElement('h4');
    this.option2Q2 = createElement('h4');
    this.option3Q2 = createElement('h4');
    this.option4Q2 = createElement('h4');

    this.message = createElement("h1")
  }

//  hide(){
//  this.title.hide();
//this.input1.hide();
//this.button.hide();
//this.input2.hide();
//this.message.hide();
//  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    // this.question("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    // this.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.html("Question 1:-When was win 11 released?" );
    
    // question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );

    this.question.position(150, 80);
    
    this.option1.html("A: 5 September 2021" );
    this.option1.position(150, 100);
    this.option2.html("B: 5 October 2021" );
    this.option2.position(150, 120);
    this.option3.html("C: 5 August 2021" );
    this.option3.position(150, 140);
    this.option4.html("D: 14 August 2021" );
    this.option4.position(150, 160);

    this.input1.position(350, 330);
    this.input2.position(150, 330);
    this.button.position(800, 380); 
    this.button.hide()
    this.button1.position(750, 380);

    this.button.mousePressed(()=>{
        
      // this.message.html("Thank You, Your Answer Has Been Submitted");
      // this.message.position(350, 350);

       this.message.html("Thank You, Your Answer Has Been Submitted");
      this.message.position(100,150);
      this.title.hide();
      this.input1.hide();
      this.button.hide();
      this.input2.hide();
      this.button.hide();
      this.question1.hide()
      this.option1Q2.hide()
      this.option2Q2.hide()
      this.option3Q2.hide()
      this.option4Q2.hide()
      // this.message("Thank You, Your Answer Has Been Submitted");
      // this.message(350, 350);

      // this.message.html("Thank You, Your Answer Has Been Submitted");
      // this.message.position(350);


    });
this.button1.mousePressed(()=>{
  this.button.show()
  this.button1.hide();
  this.question.hide()
  this.option1.hide()
  this.option2.hide()
  this.option3.hide()
  this.option4.hide()

  this.question1.html("Question 2:- What is the full form of RAM? " );
  this.question1.position(150, 80);

  this.option1Q2.html("A: Random Accesory memory" );
  this.option1Q2.position(150, 100);
  
  this.option2Q2.html("B: Random Access Machine" );
  this.option2Q2.position(150, 120);
  
  this.option3Q2.html("C: Random Access Memory" );
  this.option3Q2.position(150, 140);

  this.option4Q2.html("D: None of these" );
  this.option4Q2.position(150, 160);

  




  
})

  }
}

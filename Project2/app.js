$(document).ready(function(){
	let questions = ['I find it difficult to introduce myself to people',
	 'I get so lost in my thoughts I ignore or forget my surroundings',
	 'I do not usually initiate conversations',
	 'I prefer not to engage with people who seem angry or upset',
	 'I choose my friends carefully',
	 'I find it difficult to tell stories about myself',
 ];
	console.log(questions);
	 let score = 0;
	 let index = 0;	//question index
	 $('#question').text(questions[index]);

	$('#next').click(function(){										//wait for click
		index++;
		let value =$('input[name=radioSet1]:checked').val();
		score +=parseInt(value);
		console.log(value);
		$('#question').text(questions[index]);
		if(index == questions.length){
                    //onClick('Submit')
			if(score>0){
				alert("You're an introvert!\nYou tend to recharge by spending time alone and lose energy from being around people for long periods of time, particularly large crowds." );
			}
			else{
				alert("You're an extrovert! \nYou find their energy is at its lowest when you spend too much time alone.");
			}
		}
                /*****Styling the alert****/
              
                
	});
});

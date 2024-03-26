<template>
  <div class="cost-calculator">
    <div class="questions">

      <div class="question" v-for="(options,question) in questions"
      :key="question">
      <div>
      <span class="decoLine">|</span><label :for="question">{{ question }} </label>
      </div>
      <select :id="question" v-model="answers[question]">
        <option v-for="option in options"
        :key="option.cost"
        :cost="option.cost">{{ option.text }}</option>
      </select>
      </div>
    </div>

    <div class="number-display">
      <p class="footnote-sml">Estimated monthly cost</p>
      <div class="total">{{ totalCost }}</div>
    </div>
    <p class="footnote-sml">&#42; Based on 2024 data on Numbeo</p>
    
  </div>

</template>

<script>
export default {
  data() {
    return {
      answers: {
        accommodation:'',
        cook:''},
      
      questions:{
        'What type of accommodation do you plan to live in?':[
          { text:'On Campus', cost: 1000 },
          { text:'Digs', cost: 700 },
          { text:'Student Accommodation', cost: 1100 },
          { text: "Room in Shared Apartment", cost: 900 },
          { text: "Bed in Shared room", cost: 500 },
          { text: "Studio", cost: 1500}
        ],
        'How often do you cook?':[
          { text: "Every meal", cost: 200 },
          { text: "Half the times", cost: 400 },
          { text: "Every other day", cost: 500 },
          { text: "Never", cost: 600 }
        ],
        'How often do you spend on cigarette/alcohol/coffee?':[
          { text: "Barely not", cost: 0 },
          { text: "less than 3 times a week", cost: 50 },
          { text: "Every other day", cost: 100 },
          { text: "Everyday", cost: 200 }
        ],
        'Do you live with dependent kids or pet?':[
          { text: "No", cost: 0 },
          { text: "Yes, one pet", cost: 50 },
          { text: "Yes, one kid", cost: 600 },
        ],
        'Do you live with your partner?':[
          { text: "No", cost: 0 },
          { text: "Yes", cost: -400 },
        ],
        'How do you plan to commute?':[
          { text: "By walk or cycle", cost: 0 },
          { text: "By bus/trams/rail", cost: 40 },
          { text: "By car", cost: 200 },
        ],
        }};
        },
  computed: {
      totalCost() {
        return Object.keys(this.questions).reduce((total, question) => {
          const selectedOptionText = this.answers[question];
          const questionOptions = this.questions[question];
          const selectedOption = questionOptions.find(option => option.text === selectedOptionText);
          return total + (selectedOption ? selectedOption.cost : 0);
        }, 0);
      },
  }
};
</script>

<style scoped>
.questions {
  display: flex;
  flex-direction: column;
  gap:30px;
  font-family:'TASA-Text-regular';
  color: var(--black-color);
}

.question{
  display: flex;
  justify-content: space-between;
  font-size: 22px;
}

select {
  border: none;
  border-bottom: 1px solid var(--black-color);
  background-color: var(--background-color);
  width: 200px;
  font-family:'TASA-Text-regular';
  font-size: 18px;
}

option, 
.footnote-sml {
  font-size: 18px;
  background: var(--background-color);
}

label {
  text-align: start;
  margin-left: 10px;
}

.number-display{
  text-align: end;
  padding: 20px;
  margin-top: 50px;
  border: 2px solid var(--light-red-color);
  border-radius: 15px;
  background-color: var(--background-color);
}

.cost-calculator{
  display: flex;
  flex-direction: column;
}

.footnote-sml {
  color: var(--dark-grey-color);
  margin: 0;
  padding-top:10px;
  
}

.total{
  font-size: 45px;
  font-family: 'TASA-Display-medium';
  padding-top: 50px;
}

.decoLine {
  color: var(--light-red-color);
}
</style>
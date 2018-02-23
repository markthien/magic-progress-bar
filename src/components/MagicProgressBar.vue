<template>
  <div class="borderPadding">
    <h4 class="header">{{ msg }}</h4>
    <child message="hello!"></child>
    <p>
        <b-progress :max="limit" style="margin-bottom: 5px;">
          <b-progress-bar v-bind:class="['progress-bar', isOverLimit1 ? 'bg-danger' : 'bg-info']" :value="prograssBar1Value">
           <span>{{ prograssBar1Value + '%' }}</span>
          </b-progress-bar>
        </b-progress>
        <b-progress :max="limit" style="margin-bottom: 5px;">
          <b-progress-bar v-bind:class="['progress-bar', isOverLimit2 ? 'bg-danger' : 'bg-info']" :value="prograssBar2Value">
           <span>{{ prograssBar2Value + '%' }}</span>
          </b-progress-bar>
        </b-progress>
        <b-progress :max="limit">
          <b-progress-bar v-bind:class="['progress-bar', isOverLimit3 ? 'bg-danger' : 'bg-info']" :value="prograssBar3Value">
           <span>{{ prograssBar3Value + '%' }}</span>
          </b-progress-bar>
        </b-progress>
        <!--div class="progress" style="margin-bottom:5px;">
          <div v-bind:class="['progress-bar', isOverLimit2 ? 'bg-danger' : 'bg-info']" class="" role="progressbar" v-bind:style="{ width: prograssBar2Value + '%' }" aria-valuenow="prograssBar2Value" aria-valuemin="0" :aria-valuemax="limit"></div>
          <span>{{ prograssBar2Value + '%' }}</span>
        </div>
        <div class="progress">
          <div v-bind:class="['progress-bar', isOverLimit3 ? 'bg-danger' : 'bg-info']" class="" role="progressbar" v-bind:style="{ width: prograssBar3Value + '%' }" aria-valuenow="prograssBar3Value" aria-valuemin="0" aria-valuemax="limit"></div>
          <span>{{ prograssBar3Value + '%' }}</span>
        </div-->                
        <div style="margin-top:10px">
          <b-container>
              <b-row>
                  <b-col cols="4">
                    <b-form-select v-model="selected" class="mb-3">
                      <option v-for="option in options" v-bind:value="option.value">
                        {{ option.text }}
                      </option>
                    </b-form-select>
                  </b-col>
                  <b-col>
                    <b-button variant="info btn-block" class="buttonText" v-on:click="changeValue(1)">{{ button1Value }}</b-button>
                  </b-col>
                  <b-col>
                    <b-button variant="info btn-block" class="buttonText" v-on:click="changeValue(2)">{{ button2Value }}</b-button>
                  </b-col>
                  <b-col>
                    <b-button variant="info btn-block" class="buttonText" v-on:click="changeValue(3)">{{ button3Value }}</b-button>
                  </b-col>
                  <b-col>
                    <b-button variant="info btn-block" class="buttonText" v-on:click="changeValue(4)">{{ button4Value }}</b-button>
                  </b-col>                  
              </b-row>
          </b-container> 
        </div>    
    </p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'MagicProgressBar',
    data () {
      return {
        msg: 'Welcome to Magic Progress Bar',
        apiUrl: 'http://localhost:4555/getInitProgressBarValue',
        data: {},
        prograssBar1Value: 0,
        prograssBar2Value: 0,
        prograssBar3Value: 0,
        button1Value: 0,
        button2Value: 0,
        button3Value: 0,
        button4Value: 0,
        isOverLimit1: false,
        isOverLimit2: false,
        isOverLimit3: false,
        selected: 0,
        limit: 100,
        options: [
          { text: 'Progress Bar 1', value: 0 },
          { text: 'Progress Bar 2', value: 1 },
          { text: 'Progress Bar 3', value: 2 }
        ]
      }
    },
    methods: {
      getInitProgressBarValue () {
        axios.get(this.apiUrl, this.data).then(response => {
          console.dir(response.data)
          this.limit = response.data.limit
          this.prograssBar1Value = response.data.bars[0]
          this.prograssBar2Value = response.data.bars[1]
          this.prograssBar3Value = response.data.bars[2]

          if (this.prograssBar1Value < 0) {
            this.prograssBar1Value = 0
          } else {
            if (this.prograssBar1Value > this.limit) {
              this.isOverLimit1 = true
            } else {
              this.isOverLimit1 = false
            }
          }

          if (this.prograssBar2Value < 0) {
            this.prograssBar2Value = 0
          } else {
            if (this.prograssBar2Value > this.limit) {
              this.isOverLimit2 = true
            } else {
              this.isOverLimit2 = false
            }
          }

          if (this.prograssBar3Value < 0) {
            this.prograssBar3Value = 0
          } else {
            if (this.prograssBar3Value > this.limit) {
              this.isOverLimit3 = true
            } else {
              this.isOverLimit3 = false
            }
          }

          this.button1Value = response.data.buttons[0]
          this.button2Value = response.data.buttons[1]
          this.button3Value = response.data.buttons[2]
          this.button4Value = response.data.buttons[3]
        }).catch(e => {
          alert(e.response.data)
        })
      },
      changeValue (button) {
        let value = 0
        if (button === 1) {
          value = this.button1Value
        }
        if (button === 2) {
          value = this.button2Value
        }
        if (button === 3) {
          value = this.button3Value
        }
        if (button === 4) {
          value = this.button4Value
        }
        if (this.selected === 0) {
          this.prograssBar1Value = this.prograssBar1Value + value
          if (this.prograssBar1Value < 0) {
            this.prograssBar1Value = 0
          } else {
            if (this.prograssBar1Value > this.limit) {
              this.isOverLimit1 = true
            } else {
              this.isOverLimit1 = false
            }
          }
        }
        if (this.selected === 1) {
          this.prograssBar2Value = this.prograssBar2Value + value
          if (this.prograssBar2Value < 0) {
            this.prograssBar2Value = 0
          } else {
            if (this.prograssBar2Value > this.limit) {
              this.isOverLimit2 = true
            } else {
              this.isOverLimit2 = false
            }
          }
        }
        if (this.selected === 2) {
          this.prograssBar3Value = this.prograssBar3Value + value
          if (this.prograssBar3Value < 0) {
            this.prograssBar3Value = 0
          } else {
            if (this.prograssBar3Value > this.limit) {
              this.isOverLimit3 = true
            } else {
              this.isOverLimit3 = false
            }
          }
        }
      }
    },
    mounted () {
      this.getInitProgressBarValue()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .borderPadding {
    margin:50px
  }
  .progress {
    height: 2rem;
    line-height: 2rem;
  }
  .progress span {
    font-size:18px;
  }  
</style>

// to store information of the prvinput
class Calculator{
    // cot,pot oprates externally -->that is for displaying the output ,,inner functions are controlled by po,co
    constructor(pot,cot){
        // setting variables
        
        this.pot=pot;
        this.cot=cot;
        this.allclear();
    }
    // different functions
    allclear(){
        // po-->prvoius operand
        // co--->current operand
        this.po='';
        this.co='';
       
        this.operation=undefined;
    }
    appendnum(number){
        if(number==='.' && this.co.includes('.'))return 
        this.co=this.co.toString()+number.toString();
    }
    chooseoperation(operation){
        this.operation=operation;
        if(this.co==='')return;
        if(this.po!=='') this.compute();
        this.po=this.co;
        this.co='';
    }
    compute(){
        var computation=computation;
        const prev=parseFloat(this.po);
        const curr=parseFloat(this.co);
        if(this.po===NaN || this.co===NaN)return
                switch(this.operation){
                    case '+':
                        computation=prev+curr;
                        break;
                    case '-':
                        computation=prev-curr;
                        break;
                    case '*':
                        computation=prev*curr;
                        break;
                    case '/':
                        computation=prev/curr;
                        break;
                        default:
                            return ;

                }
                this.co=computation
                this.operation=undefined
                this.po='';
    }
    delete(){
        this.co=this.co.toString().slice(0,-1);
    }
    getdisplaynum(number){
       const strgnum=number.toString();
    //    split -->split the strg before decimal and after decimal point
       const intnum=parseFloat(strgnum.split('.')[0])
       const decnum=(strgnum.split('.')[1])
       let display;
       if(isNaN(intnum)) display='';
    //    localstring en-->gives commas after 3 digits..maximunfractiondigits-->no decimal point in int ensures..but doubt naku
       else display=intnum.toLocaleString('en',{maximumFractionDigits:0})

       if(decnum!=null){
        return `${display}.${decnum}`;
        // returns a string ..
    }
        else 
        return display;
            // const stringNumber = number.toString()
            // const integerDigits = parseFloat(stringNumber.split('.')[0])
            // const decimalDigits = stringNumber.split('.')[1]
            // let integerDisplay
            // if (isNaN(integerDigits)) {
            //   integerDisplay = ''
            // } else {
            //   integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
            // }
            // if (decimalDigits != null) {
            //   return `${integerDisplay}.${decimalDigits}`
            // } else {
            //   return integerDisplay
            // }
          
    }
    updatedisp(){
        this.cot.innerText=this.getdisplaynum(this.co);
        if(this.operation!= null){
            this.pot.innerText=`${this.getdisplaynum(this.po)}${this.operation}`;
        }
        else
        this.pot.innerText=this.getdisplaynum(this.po);
    }

}




const numbtns=document.querySelectorAll('.size-one.num');
const operationbtns=document.querySelectorAll('.size-one.operation')
const eqlsbtn=document.querySelector('.size-two.eqls')
const delbtn=document.querySelector('.size-one.del')
const allclrbtn=document.querySelector('.size-two.allclr')
const pot=document.querySelector('.prv_outpt')
const cot=document.querySelector('.curr_outpt')
// pot-->prevoius output text

const calculator=new Calculator(pot,cot);
 
numbtns.forEach(button=>{
   button.addEventListener('click',function(){
    calculator.appendnum(button.innerText);
    calculator.updatedisp();
   })
})
operationbtns.forEach(button=>{
   button.addEventListener('click',function(){
    calculator.chooseoperation(button.innerText);
    calculator.updatedisp();
   })
})
delbtn.addEventListener('click',function(){
    calculator.delete();
    calculator.updatedisp();
})
eqlsbtn.addEventListener('click',function(){
    calculator.compute();
    calculator.updatedisp();
})
allclrbtn.addEventListener('click',function(){
    calculator.allclear();
    calculator.updatedisp();
})



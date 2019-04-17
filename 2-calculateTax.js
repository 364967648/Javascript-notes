/* 
 * 根据2019年 新个税政策计算，每月个人应缴纳 个人所得税
 * e.g.
 * // 年收入
 * const yearIncome = [36000, 144000, 300000, 420000, 660000, 960000]
 * // 对应不同阶段的税率
 * const newTax = [3, 10, 20, 25, 30, 35, 45]
 * 
 * 
 * 是否有 专项扣除
 * const  deduct = []
 * 
 * calculateTax(salary, deductType)
 * 
 * salary: 月薪
 * deductType： 专项扣除类型，如果无 则为 0
 */

/**
 * [description]
 * @Author   SSL
 * @DateTime 2019-04-17T11:11:22+0800
 * @param    {[type]}                 salary     [月工资]
 * @param    {[type]}                 deductType [专项扣除类型数组]
 * @return   {[type]}                            [description]
 */
 const calculateTax = (salary, deductType=0,month =12 ) => {
    // todo
	// 计算所交金额的级别
	const returnLevel = (acc)=>{
		let level = 1;
		if(acc <= 36000 ){
			level=1;
		} else if (acc <= 144000 ) {
			level=2;
		} else if (acc <= 300000 ) {
			level=3;
		} else if (acc <= 420000 ) {
			level=4;
		} else if (acc <= 660000 ) {
			level=5;
		} else if (acc <= 960000 ) {
			level=6;
		} else {
			level=7;
		}
		return level;
	}
	// 计算所交税金
	const calcSalary = (amount, level)=>{
		let newTax = {
			1:{
				rate:3,deduction:0,level:1
			},
			2:{
				rate:10,deduction:2520,level:2
			},
			3:{
				rate:20,deduction:16920,level:3
			},
			4:{
				rate:25,deduction:31920,level:4
			},
			5:{
				rate:30,deduction:52920,level:5
			},
			6:{
				rate:35,deduction:85920,level:6
			},
			7:{
				rate:45,deduction:181920,level:7
			}
		}
		return newTax[level].rate / 100 * amount - newTax[level].deduction;
	}
	/**
	 * [description]
	 * @Author   SSL
	 * @DateTime 2019-04-17T13:21:04+0800
	 * @param    {[type]}                 m      [工资]
	 * @param    {[type]}                 n      [几个月]
	 * @param    {[type]}                 salary [专项扣除金额]
	 * @return   {[type]}                        [description]
	 */
	const calcAmount = (m,n,salary)=>{
		return new Array(n).fill(m).reduce( (acc,next) =>{
			acc += Number(next) - salary -5000;
			return acc;
		},0);
	}
	/**
	 * [description]
	 * @Author   SSL
	 * @DateTime 2019-04-17T13:24:34+0800
	 * @param    {[type]}                 type [专项扣除类型]
	 * @return   {[type]}                      [金额]
	 */
	const calcDeduct = (type)=>{
		let salary = 0;
		let deduct = {
		    1:{
		        name: '子女教育',
		        type: 1,
		        amount: 1000
		    },
		    2:{
		        name: '继续教育',
		        type: 2,
		        amount: 400
		    },
		    3:{
		        name: '住房贷款利息',
		        type: 3,
		        amount: 1000
		    },
		    4:{
		        name: '住房租金',
		        type: 4,
		        amount: 1500
		    },
		    5:{
		        name: '赡养老人',
		        type: 5,
		        amount: 2000
		    },
		    6:{
		        name: '大病医疗',
		        type: 6,
		        amount: 6000
		    }
		}
		if( Array.isArray(type) ){
			type.map(item=>{
				salary += deduct[item].amount;
			})
		} else if(typeof type === 'number'){
			salary = deduct[type].amount;
		}
		return salary;
	}
	let deduct = calcDeduct(deductType);
	let result = calcAmount(salary,month,deduct);
	let level = returnLevel(result);
	return calcSalary(result, level);	
 }
 export default calculateTax;

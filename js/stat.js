function run()
{
		// eval(document.getElementById('divid').innerText);
			eval(document.getElementById('divid').value);
}

function replaceChr(mainString, replacedChar, replaceCharBy )
	{
	var str = mainString; 
		while (true)
			{
				res = str.replace(replacedChar , replaceCharBy);
					if(res==str)
						break;

			str = res;
			}
	return str;
	}




function isArray (argumentV)
{
	if( Object.prototype.toString.call( argumentV ) === '[object Array]' ) 
	{
      return true;
	}
	else
	{
	  return false;
	}
}

/**
var parserNames = 
{
	objectsNames: ["", " length >> "," added >> "," data >> ", " sum >> ",
	" mean >> ", " sumSQ >> ", " var >> ", " sd >> ", " slope(m) >> ", " b >> "],
}
*/

var addDOM = 
{
	ID :null,
	text:"",
	IDcounter:0,
	elementID:'null',
	tag:"pre",

	add : function()
		{
			if (arguments.length == 0)
				addDOM.tag = "pre";
			else	
				addDOM.tag = arguments[0];
		
		var dataText = addDOM.text;
		var newelement = document.createElement(addDOM.tag);                        // Create a <p> node
		var textID = document.createTextNode(dataText);
		var pre_ID = "ID"+ addDOM.tag + addDOM.IDcounter;		
		newelement.setAttribute("id", pre_ID);
		newelement.appendChild(textID);                                           // Append the text to <p>
		
		
			if (addDOM.elementID == 'null')
				{
					document.body.appendChild(newelement);
				}
			else
				{
					document.getElementById(addDOM.elementID).appendChild(newelement);
				}
		
		addDOM.IDcounter++;
		
		return pre_ID;
		
		} ,
		
	changeProperty : function()
		{
		var element = arguments[0];
		var width = arguments[1]+"px";
		var height = arguments[2]+"px";
		var color = arguments[3];
		var bgcolor = arguments[4];
		var border = arguments[5];
		
		var obj = document.getElementById(element);
		obj.style.width = width;
		obj.style.height = height;
		obj.style.color = color;
		obj.style.backgroundColor = bgcolor;
		obj.style.border = border;

		if(addDOM.tag=="div")
		{
			obj.style.marginBottom = "130px";
			obj.style.marginLeft = "auto";
			obj.style.marginRight = "auto";
			obj.style.marginTop = "5px";
		}
		else
		{
			obj.style.marginBottom = "1px";
			obj.style.marginLeft = "auto";
			obj.style.marginRight = "auto";
			obj.style.marginTop = "auto";
		}
		} ,		

	remove : function()
		{
		var rElement=arguments[0];
		var selected_element = document.getElementById(rElement);
		
					if (addDOM.elementID == 'null')
					{
						document.body.removeChild(selected_element);
					}
					else
					{
						document.getElementById(addDOM.elementID).removeChild(selected_element);
					}
		
									
		},
		
	addbtn : function()
		{
		var btnElement=arguments[0];
		var btn="<button onclick=\"addDOM.remove(\'"+btnElement+"\')\" style=\"color:red;font-size:11px\">X</button>";
		return btn;
		},
		
	getById : function()
		{
		var element = addDOM.ID;
		return document.getElementById(element);
		}
	
}


var STAT = 
{
	newarray : [],
	data : [],
	sum : 0,
	methodReturnSymbols:["", " length >> "," added >> "," data >> ", " sum >> ",
	" mean >> ", " sumSQ >> ", " var >> ", " sd >> ", " slope(m) >> ", " b >> "],
	
	printFlag:0,
	dataX:[],
	dataY:[],


	getLen : function()
		{
		if(isArray(STAT.data))
			{
				if (STAT.data.length > 0)
					{	
						var argslen = arguments.length; 
						STAT.printFlag = 1;
						var res = STAT.data.length;
						
								if(argslen > 0)
									return res;
								else
									STAT.print(res);
								
					}		
			}
		else
			{
			STAT.printFlag = 0;
			alert("please use an array !");	
			}
		},

	addElement : function(element)
		{
			STAT.printFlag = 2;
			STAT.newarray.push(element);
		},
	
	getData : function()
		{
			STAT.printFlag = 3;
			STAT.print(STAT.data);
		},

	getSum : function ()
		{
			var len = STAT.getLen(0);
			STAT.sum = 0;
			
			if(len > 0)
				{
					for(index=0;index<len;index++)
					{
						STAT.sum = STAT.sum + STAT.data[index];
					}
						STAT.printFlag = 4;				
						var argslen = arguments.length; 
						var res = STAT.sum.toFixed(6);
						
								if(argslen > 0)
									return res;
								else
									STAT.print(res);
				}
			else
				{
					STAT.printFlag = 0;
					alert("The array is empty !");
					return 	false;
				}

		},


	getMean : function ()
		{ 
			var out = eval(STAT.getSum(0)); 

			if(typeof(out)=="number")
			{
				var len = STAT.getLen(0);
				STAT.printFlag = 5;
			
						var argslen = arguments.length; 
						var res = ((out/len).toFixed(6));
						
								if(argslen > 0)
									return res;
								else
									STAT.print(res);			
			}
			else
			{
			  return "Use numbers !"; 
			}
		},
	
	getSumSQ : function ()
		{ 
			var sum2=0;
			var mean = STAT.getMean(0); 
			var len = STAT.getLen(0); 
			for(index=0;index<len;index++)
				{
				    var elem = STAT.data[index];
					sum2 = sum2 + (elem-mean)*(elem-mean);
				}
						STAT.printFlag = 6;	
						var argslen = arguments.length; 
						var res = sum2.toFixed(6);
						
								if(argslen > 0)
									return res;
								else
									STAT.print(res);			
			
		},		
		
	getVar : function ()
		{ 
			var len = STAT.getLen(0);
			var variance = (STAT.getSumSQ(0))/len;
			STAT.printFlag = 7;	

						var argslen = arguments.length; 
						var res = variance.toFixed(6);
						
								if(argslen > 0)
									return res;
								else
									STAT.print(res);			
			
		},

	getSD : function ()
		{ 
			var standarddev = Math.sqrt(STAT.getVar(0));
			STAT.printFlag = 8;				
						var argslen = arguments.length; 
						var res = standarddev.toFixed(6); 
						
								if(argslen > 0)
									return res;
								else
									STAT.print(res);
				
			
		},		

	getLinearR : function ()
		{ 
	if (isArray(STAT.dataX) && isArray(STAT.dataY))
	{	
		var lenX = STAT.dataX.length;
		var lenY = STAT.dataY.length;

		var TempData = STAT.data;
		
			var sumXnum=0;
			var sumYdenom=0;

					if(((lenX > 1) && (lenY > 1))&&(lenX==lenY))
						{
							STAT.data = STAT.dataX ;
							meanX = STAT.getMean(0);
							STAT.data = STAT.dataY ;
							meanY = STAT.getMean(0);						
							STAT.data = TempData;

							for(index = 0; index < lenX; index++)
								{							
									sumXnum = sumXnum + (STAT.dataX[index]-meanX)*(STAT.dataY[index]-meanY) ;
									sumYdenom = sumYdenom + (STAT.dataX[index]-meanX)*(STAT.dataX[index]-meanX) ;
								}

								
								if (sumYdenom == 0)
									{
										alert("The line is parallel to Y-axis");
										return false;									
									}
								
									var slope = (sumXnum/sumYdenom).toFixed(6);
									var b = (meanY - meanX * slope).toFixed(6) ;
									
									
									
							
						
							
										
							var argslen = arguments.length; 
							var out = {'m' : slope , 'b' : b };
							var resm = out.m ;
							var resb = out.b ;							
						
						
								if(argslen > 0)
									return out;
								else
								{
								STAT.printFlag = 9;
								STAT.print(resm);
								STAT.printFlag = 10;
								STAT.print(resb);
								}
						}
						else
						{
						alert("The data is not valid !!!");
						}
	
		}
		else
		{
		alert("The data format is not valid !!");
		return false;
		}	
	},
		
	print  : function (data)
 	     {
			var isarray = isArray(data);
			
				if ((isarray) && (data.length > 9))
					{
				    addDOM.text = STAT.methodReturnSymbols[STAT.printFlag]+ "Cannot be shown !!" ;
					}
				else
					{
						addDOM.text = STAT.methodReturnSymbols[STAT.printFlag]+ data ;
					}
				
			STAT.printFlag=0;
			var element=addDOM.add();
			addDOM.changeProperty(element,200,20,'yellow','black',"0px solid #FF00FF");
			var obj = document.getElementById(element);
			obj.innerHTML = addDOM.addbtn(element)+ obj.innerHTML ;
		 }

}


var PLOT =
{
	ID:"",
	dataX:[],
	dataY:[],
	dataYC:[],
	confirmR: false,
	dataPlot: [],

	
	
	getPlot :function()
		{
			var element=addDOM.add("div");
			addDOM.changeProperty(element,300,200,'black','white', "1px solid #AF80FF");
			var obj = document.getElementById(element);
			obj.innerHTML='';
			obj.innerHTML = addDOM.addbtn(element)+ obj.innerHTML ;
			PLOT.ID = element;
			
			var YMax = _.max(PLOT.dataY);
			var YMin = _.min(PLOT.dataY);
			
			
			PLOT.dataPlotC = PLOT.getConvert();	
			PLOT.dataPlot = _.sortBy(PLOT.dataPlotC , "X");
			

			
			
			
			
			var descriptionY = '<hr> Y [<font style=\"color:black\"><b>min</b></font> : <font style=\"color:green\"><b>'+
			YMin+'</b></font>, <font style=\"color:black\"><b>max</b></font> : <font style=\"color:green\"><b>'+YMax+'</b></font>]';
			//+'<font style=\"color:black\"><b>';

			var descriptionEstimatedC ='<font style=\"color:black\"> Y : mX+b </font><b>';
			var descriptionEstimatedX ='</b><font style=\"color:black\"> X <b>';
		
			
			var	YKEYS = [];
			var	DESCRIPTION = [];
			var lINECOLORS  =[];
			var POINTFILLCOLORS  =[];
			
				if(PLOT.confirmR==true)
					{
						YKEYS = ['Y','YC','X'];
						DESCRIPTION = [descriptionY,descriptionEstimatedC, descriptionEstimatedX];
						lINECOLORS = ['gray','black','white'];
						POINTFILLCOLORS = ['red','green','white'];
						//PLOT.dataPlot = PLOT.getConvertR(PLOT.dataPlot);
					}
				else if(PLOT.confirmR==false)
					{
						YKEYS = ['Y','X'];
						DESCRIPTION = [descriptionY, descriptionEstimatedX];
						lINECOLORS = ['gray','white'];
						POINTFILLCOLORS = ['red','white'];
					}	

			
			
			Morris.Line({
			element: PLOT.ID,
			data: PLOT.dataPlot,
			//pointSize: '3',
			lineColors:lINECOLORS,
			pointFillColors:POINTFILLCOLORS,
			resize:false,
//			fillOpacity:1,
			parseTime:true,
/**			hoverCallback: function (index, options, content, row) {
								return "sin(" + row.x + ") = " + row.y;
							},
*/
			xkey: 'X',
/**
			ymin:auto, // YMin,
			ymax:auto, //YMax,
*/
			ykeys: YKEYS,
			xLabels:'year',
			labels: DESCRIPTION, //descriptionAccGravity, descriptionIsConcealed]
			});						
		},

	getPlotR :function()
		{
		PLOT.confirmR = true;
		var tempPlotdataY=[];
		STAT.dataX = PLOT.dataX;
		STAT.dataY = PLOT.dataY;
		
		// getting m and b 
		var outdata = STAT.getLinearR(0);
		STAT.getLinearR();
		
		m = eval(outdata.m);
		b = eval(outdata.b);
		
		for(index=0; index < STAT.dataY.length;index++)
			{
			 var Ypredict = eval(m*STAT.dataX[index]+b);
			 PLOT.dataYC[index]=(Ypredict.toFixed(2));		
			}
		
		PLOT.getPlot();
		PLOT.confirmR = false;
		STAT.dataX = [];
		STAT.dataY = [];
		
		},		
		
	getConvert :function()
		{
			jsonData = [];	
			if (isArray(PLOT.dataX) && isArray(PLOT.dataY))
				{
						var lenX = PLOT.dataX.length;
						var lenY = PLOT.dataY.length;
					if((lenX > 0) && (lenY > 0) && (lenY==lenX))
					{
						for(i=0;i<lenX;i++)
						{
							if (PLOT.confirmR==true)
								jsonData.push("{ X:"+PLOT.dataX[i]+" , Y:"+PLOT.dataY[i]+", YC:"+PLOT.dataYC[i]+"}");						
							else if (PLOT.confirmR==false)
								jsonData.push("{ X:"+PLOT.dataX[i]+" , Y:"+PLOT.dataY[i]+" }");						
						}
						jsonData=eval("["+jsonData+"]");
							return jsonData;
							
					}
					else
					{
						alert("The data is not valid !!!");
					}
					
				}		
		else
		{
			alert("The data format is not valid !!");
			return false;
		}		   
	},
	
	getConvertR: function(data)
	{
	var temp_data = data;
		for(index=0; index < temp_data.length ;index++)
		{
			if( (index!=0) && (index!=(temp_data.length-1)))
			{
				temp_data[index].YL = null;
			}
		}
	return temp_data;		
	
	}	
}




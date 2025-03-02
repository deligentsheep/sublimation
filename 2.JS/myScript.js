// "use strict"
// var a=1;
// delete a;
function test1(){
    document.getElementById("demo1").innerHTML="JS基本用法";
}

function hanshu1(){
    alert("hello.world!");
}
function hanshu2(a,b){
    alert(a+b);
}
function hanshu33(){
    var a=1;
    return a;
}
function hanshu3(){
    document.getElementById("demo5").innerHTML=hanshu33();
}
function hanshu4(){
    var x=findMax(1,11,123,56,3,266);
    function findMax(){
        var max=arguments[0];//arguments相当于是一个存储参数的一个容器，是为了方便调用参数的
        if(arguments.length<2) alert("就一个数字比什么比？");
        for(var i=0;i<arguments.length;i++){
            if(arguments[i]>max){
                max=arguments[i];
            }
        }
        document.getElementById("demo5").innerHTML=max;
    }
}
function a(){
    var x=0;
    function b(){
        x++;
        return x;
    }
}
function hanshu5(){
    var counter=a();
    alert(counter());
    alert(counter());
    alert(counter());
    alert(counter());
}

var x="全局变量x";
function jubu(){
    var x="局部变量x";
    document.getElementById("demo6").innerHTML=x;
}

function jiazhi(){
    var a="字符串";
    var b=123;
    var c=a+b;
    document.getElementById("demo7").innerHTML=c;
}

function xunhuan(){
    var x;
    var txt="";
    var person={name:"zrc",yaer:"20"};
    for(x in person){
        txt+=person[x];
    }
    document.getElementById("demo8").innerHTML=txt;
}

function search(){
    var a="hello,world!";
    var b=a.search(/world/i);
    //var b=a.search("world");//直接输入要搜索的字符串，字符串参数会自动转化为正则表达
    document.getElementById("demo10").innerHTML=b;
}
function replace(){
    var a="hello,world!";
    var b=a.replace(/world/i,"zrc");
    //var b=a.replace("world","zrc");
    document.getElementById("demo10").innerHTML=b;
}
function test(){
    var a=new RegExp("d");
    var b=a.test("hello,world!");
    document.getElementById("demo10").innerHTML=b;
}
function exec(){
    var a=new RegExp("d");
    var b=a.exec("hello,world!");
    document.getElementById("demo10").innerHTML=b;
}

function biaodan1(){
    var m=document.getElementById("name").value;
    if(m==null||m==""){
        alert("请输入用户名！");
        return false;
    }
    else{
        document.getElementById("demo11").innerHTML=m;
    }
}
function biaodan2(){
    var x=document.getElementById("email").value;
    var a=x.indexOf("@");//查找@字符在字符串x中首次出现的位置
    console.log(a);
    var b=x.lastIndexOf(".");//查找.字符在字符串x中出现的最后一次位置
    console.log(b);
    if (a<1||b<a+2||b+2>=x.length||x==null||x==""){
		alert("不是一个有效的 e-mail 地址!");
  		return false;
	}
    else{
        document.getElementById("demo11").innerHTML=x;
    }
}

function jsvoid(){
    var a,b,c;
    a=void(b=1,c=2);
    document.getElementById("demo13").innerHTML=a+" "+b+" "+c;
}

function login() {
    var form = document.getElementById("form1");// 获取表单元素
// 手动序列化表单数据
//1.创建一个FormData对象，该对象会收集表单中的所有数据，包括表单元素的名称和对应的值
    var formData = new FormData(form);

//2.初始化一个空数组serializeData,用于储存序列化之后的键值对
    var serializedData = [];

//3.遍历FormData对象中的每一个键值对，formData.entries()方法会返回一个迭代器，包含表单数据的键值对
    for (var [key, value] of formData.entries()){
        console.log(key+":"+value);

//4.对于每一个键值对，使用 encodeURIComponent 函数对键和值进行编码，以确保特殊字符能被正确处理，然后将编码后的键值对以 key=value 的形式添加到 serializedData 数组中。        
        serializedData.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
        
    }
    console.log(serializedData);

//5.使用join方法将serializeData数组中的所有元素用&连接起来形成一个完整的查询字符串
    var dataString = serializedData.join("&");
    console.log(dataString);

//6.创建一个XMLHttpRequest对象（内置的JS对象），后续使用它来发送HTTP请求
    var xhr=new XMLHttpRequest();

//7.打开请求
    //var url = "/api/login?" + dataString;//这样发送到URL的时候后面会自动带上表单数据
    //xhr.open("GET",url,true);
    //定义请求的方式（GET/POST）、URL和是否异步（true表示异步，布尔值）
    //这里我们没有后端代码，只是发起了一个对./test.json文件的GET请求，所以并没有真的发送表单数据
    xhr.open("GET","./test.json",true);
    //POST请求定义处理请求成功的函数，尝试将请求头的Content-Type设置成application/json
    //xhr.setRequestHeader("Content-Type","application/json");
//8.监听请求状态变化，onreadystatechange是一个事件处理函数，当XMLHttpRequest对象状态发生变化的时候就会触发这函数
    xhr.onreadystatechange=function(){
        //readyState表示请求的状态，4表示请求已完成
        //status表示请求的响应状态码，200表示请求成功
        if(xhr.readyState==4&&xhr.status==200){
            //假如请求成功，获取服务器返回的响应文本
            var response=xhr.responseText;
            console.log(response);
        }
    };
//9.发送请求：GET方法不需要传递参数
    xhr.send();
}

function ajaxtest(){
    var xhr=new XMLHttpRequest();//创建XMLHttpRequest对象
    xhr.open("GET","./test.json",true);//定义请求的方式（GET/POST）、URL和是否异步（true表示异步）
    xhr.setRequestHeader("Content-Type","application/json");//定义处理请求成功的函数
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            //假如请求成功
            var response=xhr.responseTest;
            console.log(response);
        }
    };
    xhr.send();//发送请求
}
function fetchtest(){
    fetch('url')
    .then(res => {
        if (res.ok) {
            //return Promise.reject('请求失败')
            return res//.text()
        } else {
            return Promise.reject('请求失败')
        }
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
}


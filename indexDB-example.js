var request = window.indexedDB.open('person');
	var db;
	request.onsuccess=function(event){
		db=event.target.result;
		console.log("数据库打开成功");
		//console.dir(db);
		add();
	}
	request.onupgradeneeded = function(event) {
	  db = event.target.result;
	  var objectStore;
	  if (!db.objectStoreNames.contains('person')) {
		objectStore = db.createObjectStore('person', { keyPath: 'id' });
	  }
	  console.dir("1111");
	}
	
	function add(){
		console.dir("===");
		var request1 = db.transaction(['person'], 'readwrite')
		.objectStore('person')
		.add({ id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' });

	  request1.onsuccess = function (event) {
		console.log('数据写入成功');
		read();
	  };

	  request1.onerror = function (event) {
		console.log('数据写入失败');
		read();
	  }
	}
	function read() {
	   var transaction = db.transaction(['person']);
	   var objectStore = transaction.objectStore('person');
	   var request = objectStore.get(1);

	   request.onerror = function(event) {
		 console.log('事务失败');
	   };

	   request.onsuccess = function( event) {
		  if (request.result) {
			console.log('Name: ' + request.result.name);
			console.log('Age: ' + request.result.age);
			console.log('Email: ' + request.result.email);
		  } else {
			console.log('未获得数据记录');
		  }
	   };
	}

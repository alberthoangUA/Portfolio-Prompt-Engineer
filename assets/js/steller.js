
// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});
AOS.init({
	duration: 1200, // Thời gian diễn ra hiệu ứng (tính bằng ms)
});


// Function onclick to call event
                

	function handleClick(event) {
         if (window.innerWidth < 868) {
              event.preventDefault();
             window.location.href = "tel:+84395505343";
         }
    };


window.addEventListener('scroll', function() {
	var element = document.querySelector('.fade-out-element');
	var position = element.getBoundingClientRect();
  
	// Kiểm tra xem phần tử có nằm ngoài màn hình không
	if(position.top < window.innerHeight && position.bottom >= 0) {
	  // Phần tử đang trong viewport, loại bỏ class fade-out nếu có
	  element.classList.remove('fade-out');
	} else {
	  // Phần tử không nằm trong viewport, thêm class fade-out
	  element.classList.add('fade-out');
	}
  });
// Khi click vào icon "ti-eye"
document.querySelector('.ti-eye').addEventListener('click', function() {
    document.getElementById('popupContainer').style.display = 'block';
    document.getElementById('popupImage').src = this.src;
    document.getElementById('popupText').innerText = this.alt;
});

// Khi click vào nút đóng
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('popupContainer').style.display = 'none';
});

//   function toggleDropdown(element) {
//     var content = element.nextElementSibling;
//     if (element.classList.contains("active")) {
//         element.classList.remove("active");
//         content.style.maxHeight = null;
//     } else {
//         // Đóng tất cả các dropdown khác trước khi mở mới
//         var allDropdowns = document.querySelectorAll('.custom-dropdown .dropdown-content');
//         var allToggles = document.querySelectorAll('.custom-dropdown .dropdown-toggle');
//         for (var i = 0; i < allDropdowns.length; i++) {
//             allDropdowns[i].style.maxHeight = null;
//             allToggles[i].classList.remove("active");
//         }
//         element.classList.add("active");
//         // Đặt max-height đủ lớn để hiển thị toàn bộ nội dung
//         content.style.maxHeight = content.scrollHeight + "px";
//     }
// }
function toggleDropdown(element) {
	var parent = element.parentElement;
	if (parent.classList.contains('open')) {
	  parent.classList.remove('open');
	} else {
	  // Đóng tất cả các dropdown khác trước khi mở dropdown mới
	  var openDropdowns = document.querySelectorAll('.custom-dropdown.open');
	  for (var i = 0; i < openDropdowns.length; i++) {
		openDropdowns[i].classList.remove('open');
	  }
	  parent.classList.add('open');
	}
  }




  


// 	function toggleDropdown(element) {
// 		var dropdownContent = element.nextElementSibling;
// 		if (dropdownContent.style.display === "block") {
// 			dropdownContent.style.display = "none";
// 			dropdownContent.style.height = "0"; // Đặt lại độ cao khi đóng dropdown
// 		} else {
// 			dropdownContent.style.display = "block";
// 			dropdownContent.style.height = "auto"; // Đặt độ cao tự động để hiển thị toàn bộ nội dung
// 		}
// }
// function toggleDropdown(element) {
//     var content = element.nextElementSibling;
//     if (content.style.maxHeight){
//         content.style.maxHeight = null;
//         element.classList.remove("active");
//     } else {
//         // Đóng tất cả các dropdown khác
//         var allDropdowns = document.querySelectorAll('.dropdown-content');
//         for (var i = 0; i < allDropdowns.length; i++) {
//             allDropdowns[i].style.maxHeight = null;
//             allDropdowns[i].previousElementSibling.classList.remove("active");
//         }
//         // Mở dropdown hiện tại
//         content.style.maxHeight = content.scrollHeight + "px";
//         element.classList.add("active");
//     }
// }
// Count numbers
// document.addEventListener('DOMContentLoaded', function() {
//     var counters = document.querySelectorAll('.count');
//     var speed = 5; // Tốc độ của hiệu ứng

//     counters.forEach(counter => {
//         var updateCount = () => {
//             var target = +counter.getAttribute('data-target');
//             var count = +counter.innerText;

//             var inc = target / speed;

//             if (count < target) {
//                 counter.innerText = Math.ceil(count + inc);
//                 setTimeout(updateCount, 1);
//             } else {
//                 counter.innerText = target;
//             }
//         }

//         updateCount();
//     });
// });

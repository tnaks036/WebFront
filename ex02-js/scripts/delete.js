  // onload(페이지 로드가 끝났을 때) -> 초기화 
  window.addEventListener("load", function(event) {
    // 쇼핑 목록 초기화
    let cartItems = document.querySelectorAll("#list > li");
    console.log("items:", cartItems);
    for (let i=4 ; i < cartItems.length; i++){
        // 부모로부터 제거
        cartItems[i].parentNode.removeChild(cartItems[i]);
        //특정 자식의 부모의 노드에서 자식을 삭제해라(어떤 자식)
    }


    // btn-add 버튼에 이벤트 리스너 부착
    document.getElementById("btn-add")
        .addEventListener("click", addItem);
});
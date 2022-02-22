function addItem() {
    let itemInput = document.getElementById("item");
    // 앞 뒤 공백 제거
    let item = itemInput.value.trim();

    if (item.length > 0) {
        console.log("추가할 아이템:", item);

        // 추가할 부모 선택 # list
        let container = document.getElementById("list");

        // 추가할 요소 생성 : createElement
        let itemNode = document.createElement("li"); // list에 appdend child를 통해 li를 자식으로 만들어야함
        itemNode.innerText = item;

        // 안쪽에 도구 상자 추가
        let toolbar = document.createElement("div")
        toolbar.style.display = "inline";
        let delBtn = document.createElement("button");
        delBtn.innerText = "삭제";
        delBtn.style.cssFloat = 'right';
        toolbar.appendChild(delBtn); 

        // 삭제를 itemnode에 추가해줘야 표시가 됨
        itemNode.appendChild(toolbar);
        container.appendChild(itemNode);


        delBtn.addEventListener("click", function(event){
            console.log("이벤트 발생 객체:", event.target);
            // 삭제가 event.target > 얘의 부모노드의 부모노드가 삭제할 item임
            // 삭제할 노드 
            let removeItem = event.target.parentNode.parentNode;
            console.log("삭제할 노드:", removeItem);
            let parent = removeItem.parentNode; // 부모
            parent.removeChild(removeItem);
            // ul로 부터 remove item을 함


        });
        // 입력상자 초기화, 포커스
        itemInput.value = "";  // 이것 덕분에 초기화가 됨
        itemInput.focus();

        

    }
}
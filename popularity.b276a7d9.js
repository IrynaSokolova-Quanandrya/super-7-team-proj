window.onload=function(){document.body.classList.add("loaded_hiding"),window.setTimeout((function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")}),500)},document.querySelector(".js-speaker-form").addEventListener("submit",(e=>{e.preventDefault(),new FormData(e.currentTarget).forEach(((e,o)=>console.log(`${o}: ${e}`))),e.currentTarget.reset()})),(()=>{const e={openModalBtn:document.querySelector("[data-open]"),closeModalBtn:document.querySelector("[data-close]"),modal:document.querySelector("[data]")};function o(){e.modal.classList.toggle("hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})();
//# sourceMappingURL=popularity.b276a7d9.js.map
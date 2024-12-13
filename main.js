const product = {
    "id": 101,
    "name": "Classy Modern Smart Watch",
    "price": {
      "original": 99.00,
      "discounted": 79.00
    },
    "rating": 3.5,
    "reviews": 2,
    "description": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teaching.",
    "type": "Watch",
    "model_number": "Forerunner 290XT",
    "colors": [
      {
        "name": "Purple",
        "code": "#816BFF",
        "image": "https://i.ibb.co.com/dmRTrVG/product-gallery.png"
      },
      {
        "name": "Cyan",
        "code": "#1FCEC9",
        "image": "https://i.ibb.co.com/QX8wZbK/lg-a-3.png"
      },
      {
        "name": "Blue",
        "code": "#4B97D3",
        "image": "https://i.ibb.co.com/889yJ0j/lg-a-3-1.png"
      },
      {
        "name": "Black",
        "code": "#3B4747",
        "image": "https://i.ibb.co.com/C6hNkCK/black.png"
      }
    ],
    "wrist_sizes": [
      {
        "label": "S",
        "price": 69
      },
      {
        "label": "M",
        "price": 79
      },
      {
        "label": "L",
        "price": 89
      },
      {
        "label": "XL",
        "price": 99
      }
    ],
    "stock": 100
  }

  let currentColor = product.colors[0].code;
  let selectedColor = product.colors.find((item) => item.code === currentColor);
  let quantity = 0;
  let currentSize = product.wrist_sizes[0].label;
  const selectedSize = product.wrist_sizes.find(item => item.label === currentSize);
  

  const handleSelectedColor = (color,inx) => {
      currentColor = color.code;
      selectedColor = product.colors.find((item) => item.code === currentColor);
      const selectedImg = document.querySelector('.selected-image');
      const selectedColorDiv = document.querySelectorAll('.selected-color');
      selectedImg.src = selectedColor.image;
      selectedColorDiv.forEach((item,idx) => {
        if(idx === inx){
            item.classList.add(`border`, `border-[${selectedColor.code}]`)
        }else{
            item.classList.remove(`border`, `border-[${selectedColor.code}]`)
        }
      })
  }

  const handleSelectedSize = (size,inx) => {
    console.log(size);
    const allSizes = document.querySelectorAll('.sizes');
    const labels = document.querySelectorAll('.label');
    labels.forEach((item,idx) => {
        if(idx === inx){
            item.classList.remove('text-[#364A63]');
            item.classList.add('text-[#6576FF]');
        }else{  
            item.classList.remove('text-[#6576FF]');
            item.classList.add('text-[#364A63]');
        }
    })
    allSizes.forEach((item,idx) => {
        if(idx === inx){
            item.classList.remove('border','border-[#DBDFEA]');
            item.classList.add('border','border-[#6576FF]');
        }else{  
            item.classList.remove('border','border-[#6576FF]');
            item.classList.add('border','border-[#DBDFEA]');
        }
    })
  }

  

  
  

  const renderProduct = (product) => {
    const section = document.getElementById("product-section");

    // Main product content
    section.innerHTML = `
      <div class="w-fit ">
        <img src="${selectedColor.image}" alt="${product.name}" class="h-auto selected-image w-auto lg:h-[720px] lg:max-w-[600px]">
      </div>
      <div class="flex flex-col justify-start space-y-5">
        <h2 class="text-[40px] text-[#364A63] font-bold">${product.name}</h2>
        <div class="flex gap-2 items-center">
          <div class="stars" data-rating="${product.rating}"></div>
          <p class="text-[#8091A7] text-sm">(${product.reviews} Reviews)</p>
        </div>
        <h5 class="text-[#6576FF] text-2xl text-start font-bold">
          <div class="flex items-center gap-2">
            <span class="text-[#8091A7] text-xl font-light line-through">$${product.price.original}.00</span>
            <span>$${product.price.discounted}.00</span>
          </div>
        </h5>
        <p class="text-[#8091A7] text-lg text-start">${product.description}</p>
        <div class="flex gap-[43px] text-[#8091A7] text-sm">
          <p>Type</p>
          <p>Model Number</p>
        </div>
        <div class="flex gap-6 text-[#364A63] text-base font-bold">
          <p>${product.type}</p>
          <p>${product.model_number}</p>
        </div>
        <p class="text-lg text-[#364A63] font-bold">Band Color</p>
        <div id="color-options" class="flex gap-3"></div>
        <p class="text-[#364A63] text-lg font-bold">Wrist Size</p>
        <div id="size-options" class="flex gap-2 md:gap-5 mt-2 wrest-sizes"></div>
        <div class="flex items-center gap-2  w-fit ">
              <div class="flex items-center border-[0.5px] border-[#DBDFEA] rounded-md">
                <button
                onclick="handleDecrement()"
                  id="minus"
                  class="h-10 w-10 flex justify-center items-center border-r border-r-[#DBDFEA] rounded-none outline-none focus:outline-none"
                >
                    <i class="fa-solid fa-minus text-[#8091A7]" ></i>
                </button>
                <input
                  id="quantity-input"
                  type="text"
                  value="${quantity}"
                  readOnly
                  class="w-16 h-10 border-0 text-center outline-none"
                />
                <button
                  id="plus"
                  class="h-10 w-10  border-l border-l-[#DBDFEA] flex justify-center items-center rounded-none focus:outline-none"
                >
                 <i class="fa-solid fa-plus text-[#8091A7]"></i>
                </button>
              </div>
              <button 
                class="flex-1 bg-[#6576FF] text-white text-nowrap px-[18px] py-2 rounded-[3px] outline-none focus:outline-none"
              >
                Add to Cart
              </button>
              <button
                class="h-10 w-10"
              >
                
              </button>
            </div>
      </div>
    `;


    //append colors
    const colorOptions = document.getElementById("color-options");
    product.colors.forEach((color,idx) => {
      const colorDiv = document.createElement("div");
      colorDiv.innerHTML = `
        <div class="p-[1px] rounded-full selected-color ${idx === 0 ? `border border-[${currentColor}]` : ""}">
          <div style="background-color: ${color.code}" class="h-4 w-4 rounded-full m-1 cursor-pointer"></div>
        </div>
      `;
      colorDiv.addEventListener('click',() => handleSelectedColor(color,idx))
      colorOptions.appendChild(colorDiv);
    });

    //append sizes
    const sizes = document.getElementById("size-options");
    product.wrist_sizes.forEach((size,idx) => {
      const sizeDiv = document.createElement("div");
      sizeDiv.innerHTML = `
        <div class="flex gap-3 border px-[18px] py-2 cursor-pointer sizes ${idx === 0 ? "border-[#6576FF]" : "border-[#DBDFEA]"}">
            <p class=" ${idx === 0 ? "text-[#6576FF]" : "text-[#364A63]"} text-sm font-bold label">${size.label}</p>
            <p class="text-[#8091A7] text-[13px]">$${size.price}</p>
        </div>
      `;
      sizeDiv.addEventListener('click',() => handleSelectedSize(size,idx))
      sizes.appendChild(sizeDiv);
    });

    // cart quantity
    const quantityInput = document.getElementById('quantity-input');

    const handleIncrement = () => {
        quantity ++;
        updateQuantity();
      }
    
      const handleDecrement = () => {
        if(quantity > 0){
            quantity -= 1;
            updateQuantity();
        }
      }
    const updateQuantity = () => {
        quantityInput.value = quantity; 
    };
    document.getElementById('plus').addEventListener('click',handleIncrement)
    document.getElementById('minus').addEventListener('click',handleDecrement);
  };

  // Initialize product rendering
  renderProduct(product);
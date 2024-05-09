

export function Checkbox({ setIsChecked }) {
    const handleCheckBox = (event) => {
        setIsChecked(event.target.checked);
    };
    return (
        
        <div class="flex items-center py-5">
            <input type="checkbox" onChange={handleCheckBox} className="w-4 h-4 checked text-green-500 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
            <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900">By checking the box, you agree to our <a href="#" class="text-[#D9A831] underline">privacy policy</a> and <a href="#" class="underline text-[#D9A831]">terms of use,</a> and allow us to use your information to contact you about our services</label>
        </div>

    );
  }
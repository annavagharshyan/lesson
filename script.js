document.addEventListener('DOMContentLoaded', function() {
    // Get all section headers for dropdown functionality
    const sectionHeaders = document.querySelectorAll('.dropdown-section .section-header');
    
    // Add click event listeners to dropdown sections
    sectionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const section = this.parentElement;
            const collapseBtn = this.querySelector('.collapse-btn');
            
            // Toggle expanded class
            section.classList.toggle('expanded');
            
            // Update arrow direction
            if (section.classList.contains('expanded')) {
                collapseBtn.textContent = '∧';
            } else {
                collapseBtn.textContent = '∨';
            }
        });
    });
    
    // Handle calculator inputs
    const calculatorInputs = document.querySelectorAll('.calculator-input');
    
    calculatorInputs.forEach(input => {
        // Format numbers on input
        input.addEventListener('input', function() {
            let value = this.value.replace(/[^\d]/g, '');
            if (value) {
                // Add thousand separators if needed
                value = parseInt(value).toLocaleString('en-US');
                this.value = value.replace(/,/g, '');
            }
        });
        
        // Select all text on focus
        input.addEventListener('focus', function() {
            this.select();
        });
        
        // Validate on blur
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.value = '0';
            }
        });
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const activeElement = document.activeElement;
            if (activeElement.classList.contains('calculator-input')) {
                // Move to next input or blur if last
                const inputs = Array.from(calculatorInputs);
                const currentIndex = inputs.indexOf(activeElement);
                if (currentIndex < inputs.length - 1) {
                    inputs[currentIndex + 1].focus();
                } else {
                    activeElement.blur();
                }
            }
        }
    });
    
    // Initialize calculator with proper formatting
    calculatorInputs.forEach(input => {
        if (input.value) {
            const event = new Event('input');
            input.dispatchEvent(event);
        }
    });
});
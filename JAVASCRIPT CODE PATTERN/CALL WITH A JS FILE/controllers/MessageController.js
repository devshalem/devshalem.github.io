export class MessageController{
    showErrorAlert(title, message, timer = 3000){
        Swal.fire({
            title: title,
            text: message,
            showCancelButton: false,
            showConfirmButton:false,
            timer: parseInt(timer),
            icon: 'error',
            type: 'error'
        });
    }

    showWarningAlert(title, message, timer = 3000){
        Swal.fire({
            title: title,
            text: message,
            showCancelButton: false,
            showConfirmButton:false,
            timer: parseInt(timer),
            icon: 'warning',
            type: 'warning'
        });
    }

    showInfoAlert(title, message,timer = 3000){
        Swal.fire({
            title: title,
            text: message,
            showCancelButton: false,
            showConfirmButton:false,
            timer: parseInt(timer),
            icon: 'info',
            type: 'info'
        });
    }

    showSuccessAlert(title, message, timer = 3000){
        Swal.fire({
            title: title,
            text: message,
            showCancelButton: false,
            showConfirmButton:false,
            timer: parseInt(timer),
            icon: 'success',
            type: 'success'
        });
    }

}
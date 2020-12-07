document.getElementById('survey-btn').addEventListener('click', () => {
    document
        .getElementById('survey-embed')
        .classList.remove('survey-embed--hidden');

    document
        .getElementById('survey-embed-cover')
        .classList.remove('survey-embed-cover--hidden');

    document.getElementsByTagName('BODY')[0].style.overflow = 'hidden';
});

document.getElementById('survey-embed-close').addEventListener('click', () => {
    document
        .getElementById('survey-embed')
        .classList.add('survey-embed--hidden');

    document
        .getElementById('survey-embed-cover')
        .classList.add('survey-embed-cover--hidden');

    document.getElementsByTagName('BODY')[0].style.overflow = 'auto';
});

const headerDownloadBtns = document.getElementsByClassName(
    'header__download-btn'
);

for (let i = 0; i < headerDownloadBtns.length; i++) {
    headerDownloadBtns[i].addEventListener('click', () => {
        document
            .getElementById('notify-popup')
            .classList.remove('notify-popup--hidden');
        document
            .getElementById('survey-embed-cover')
            .classList.remove('survey-embed-cover--hidden');
    });
}

document.getElementById('notify-popup-close').addEventListener('click', () => {
    document
        .getElementById('notify-popup')
        .classList.add('notify-popup--hidden');

    document
        .getElementById('survey-embed-cover')
        .classList.add('survey-embed-cover--hidden');
});

document.onreadystatechange = function first() {
    if (document.readyState !== 'complete') {
        // document.querySelector('body').style.visibility = 'hidden';
        document.querySelector('#loader').style.visibility = 'visible';
    } else {
        setTimeout(() => {
            document.querySelector('#loader').style.display = 'none';
        }, 1000);
        // document.querySelector('body').style.visibility = 'visible';
    }
};

document
    .getElementById('trial-register-form-btn')
    .addEventListener('click', (event) => {
        event.preventDefault();
        turnOnSpin();

        const email = document.getElementById('trial-register-form-input')
            .value;
        if (email == '') {
            alert('Vui lòng điền thông tin đầy đủ!');
        } else
            fetch('https://api.apispreadsheets.com/data/4677/', {
                method: 'POST',
                body: JSON.stringify({
                    data: {
                        email,
                        time: new Date(),
                    },
                }),
            }).then((res) => {
                if (res.status === 201) {
                    alert('Bạn đã đăng kí dùng thử thành công!');
                    document.getElementById('trial-register-form-input').value =
                        '';
                } else {
                    alert('Có lỗi xảy ra, vui lòng thử lại!');
                }

                turnOffSpin();
                document.getElementById('notify-popup-close').click();
            });
    });

document
    .getElementById('contact-form-btn')
    .addEventListener('click', (event) => {
        event.preventDefault();
        turnOnSpin();
        const email = document.getElementById('contact-form-email').value;
        const name = document.getElementById('contact-form-name').value;
        const message = document.getElementById('contact-form-message').value;

        if (email == '' || name == '' || message == '') {
            alert('Vui lòng điền thông tin đầy đủ!');
        } else
            fetch('https://api.apispreadsheets.com/data/4684/', {
                method: 'POST',
                body: JSON.stringify({
                    data: {
                        email,
                        name,
                        message,
                        time: new Date(),
                    },
                }),
            }).then((res) => {
                if (res.status === 201) {
                    alert(
                        'Chúng tôi đã nhận được tin nhắn, sớm sẽ phản hồi với bạn'
                    );
                    document.getElementById('contact-form-email').value = '';
                    document.getElementById('contact-form-name').value = '';
                    document.getElementById('contact-form-message').value = '';
                } else {
                    alert('Có lỗi xảy ra, vui lòng thử lại!');
                }
                turnOffSpin();
            });
    });

document.getElementById('notify-modal-1-btn').addEventListener('click', () => {
    document
        .getElementById('notify-modal-1')
        .classList.add('notify-modal--hidden');
});

function turnOnModal1() {
    document
        .getElementById('notify-modal-1')
        .classList.remove('notify-modal--hidden');
}

function turnOffModal1() {
    document
        .getElementById('notify-modal-1')
        .classList.add('notify-modal--hidden');
}

function turnOnSpin() {
    const elm = document.getElementsByClassName('cover-spin')[0];
    elm.classList.add('cover-spin--show');
}

function turnOffSpin() {
    const elm = document.getElementsByClassName('cover-spin')[0];
    elm.classList.remove('cover-spin--show');
}

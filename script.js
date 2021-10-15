$(document).ready(function() {
    var nelly = {
        'img': 'img/about/1.jpg',
        'name': 'Nelly Furtado',
        'job': 'App Developer',
        'des': 'Good over template. Im getting back into coding and had simple question for the author. They responded within 30 minute and answered my question. Highly recommned'
    }
    var brian = {
        'img': 'img/about/2.jpg',
        'name': 'Brian Ederson',
        'job': 'Web Designer',
        'des': 'I cant believe I got support and my problem resolved in just minutes form posting my question. Simply amazing team and amazing theme! Thank you very much guys for excellent support'
    }
    var steves = {
        'img': 'img/about/3.jpg',
        'name': 'Steve Collins',
        'job': 'Artel Corp',
        'des': 'Awesome template, well written code and look great on any platform. The customer support is very helpful and as hug asset to this template. Over all the good design, that I am qite happy with'
    }
    var imgArr = ['./img/item/4.jpg', './img/item/5.jpg', './img/item/6.jpg'];
    var imgPos = 0;
    $('#nelly').hover(function() {
        $('#nelly').find('.client-img-overlay').addClass('show');
        $('.user-img').find('img').attr('src', nelly.img);
        $('.user-name').text(nelly.name);
        $('.test-content-detail').text(nelly.des);
        $('.user-job').text(nelly.job);
    })
    $('#total').text(imgArr.length)
    $('#nelly').mouseleave(function() {
        $('#nelly').find('.client-img-overlay').removeClass('show');
    })
    $('#brian').hover(function() {
        $('#brian').find('.client-img-overlay').addClass('show');
        $('.user-img').find('img').attr('src', brian.img);
        $('.user-name').text(brian.name);
        $('.test-content-detail').text(brian.des);
        $('.user-job').text(brian.job);
    })
    $('#brian').mouseleave(function() {
        $('#brian').find('.client-img-overlay').removeClass('show');
    })
    $('#steve').hover(function() {
        $('#steve').find('.client-img-overlay').addClass('show');
        $('.user-img').find('img').attr('src', steves.img);
        $('.user-name').text(steves.name);
        $('.test-content-detail').text(steves.des);
        $('.user-job').text(steves.job);
    })
    $('#steve').mouseleave(function() {
        $('#steve').find('.client-img-overlay').removeClass('show');
    })
    var position = $(window).scrollTop();
    $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll > position) {
                $('.detail-img img').css('animation-name', 'scrollUp');
                $('.detail-img img').css('animation-duration', '3s');
                // $('.detail-img img').css('animation-timing-function', 'linear')
                // $('.detail-img img').css('animation-iteration-count', 'infinite');
            } else {
                $('.detail-img img').css('animation-name', 'scrollDown');
                $('.detail-img img').css('animation-duration', '3s');
                // $('.detail-img img').css('animation-timing-function', 'linear')
                // $('.detail-img img').css('animation-iteration-count', 'infinite');
            }
            if (this.scrollY > 20) {
                $('.header').addClass('holder');
            } else {
                $('.header').removeClass('holder');
            }
        })
        // open modal form
    $('#btn-close-more').click(function() {
        $('#modal-more').removeClass('show-modal')
    })
    $('#btn-close-news').click(function() {
        $('#modal-news').removeClass('show-modal')
    })
    $('#btn-close-video').click(function() {
        $('#modal-video').removeClass('show-modal')
    })
    $('#btn-close-img').click(function() {
        $('#modal-img').removeClass('show-modal')
    })
    $('#btn-learn-more').click(function() {
            $('#modal-more').addClass('show-modal')
        })
        //image open
    $('#open-img-1').click(function() {
        $('#modal-img').addClass('show-modal');
        imgPos = 0;
        $('#num-of').text(imgPos + 1)
        $('.modal-img-img').find('img').attr('src', imgArr[0])
    })
    $('#open-img-2').click(function() {
        $('#modal-img').addClass('show-modal');
        imgPos = 1;
        $('#num-of').text(imgPos + 1)
        $('.modal-img-img').find('img').attr('src', imgArr[1])
    })
    $('#open-img-3').click(function() {
            $('#modal-img').addClass('show-modal');
            imgPos = 2;
            $('#num-of').text(imgPos + 1)
            $('.modal-img-img').find('img').attr('src', imgArr[2])
        })
        // news open
    $('#open-new-1').click(function() {
        $('#modal-news').addClass('show-modal');
        $('#news-img').attr('src', './img/news/1.jpg')
    })
    $('#open-new-2').click(function() {
        $('#modal-news').addClass('show-modal');
        $('#news-img').attr('src', './img/news/2.jpg')
    })
    $('#open-new-3').click(function() {
            $('#modal-news').addClass('show-modal');
            $('#news-img').attr('src', './img/news/3.jpg')
        })
        //open video
    $('#open-video-1').click(function() {
        $('#modal-video').addClass('show-modal');
        $('#modal-video-frame').find('iframe').replaceWith('<iframe width="900" height="506" src="https://www.youtube.com/embed/0mVbNp1ol_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    })
    $('#open-video-2').click(function() {
        $('#modal-video').addClass('show-modal');
        $('#modal-video-frame').find('iframe').replaceWith('<iframe width="900" height="506" src="https://www.youtube.com/embed/HtSuA80QTyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    })
    $('#open-video-3').click(function() {
        $('#modal-video').addClass('show-modal');
        $('#modal-video-frame').find('iframe').replaceWith('<iframe width="900" height="506" src="https://www.youtube.com/embed/TlB_eWDSMt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    })
    $('#btn-pre').click(function() {
        imgPos--;
        if (imgPos < 0) {
            imgPos = imgArr.length - 1;
        }
        $('.modal-img-img').find('img').attr('src', imgArr[imgPos])
        $('#num-of').text(imgPos + 1)
    })
    $('#btn-next').click(function() {
        imgPos++;
        if (imgPos >= imgArr.length) {
            imgPos = 0;
        }
        $('.modal-img-img').find('img').attr('src', imgArr[imgPos])
        $('#num-of').text(imgPos + 1)
    })
})
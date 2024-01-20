// 메인 페이지 get 시 보여줄 내용
exports.home = (req,res) => {
    res.send('hello carrot market');
}

// param : page
// 파라미터 값에 따라 페이지 이동이 다르게
exports.page = (req, res) => {
    const page = req.params.page;
    let content;
    switch (page) {
        case 'terms':
            content = '이용 약관'
            break;
        case 'policy':
            content = '개인정보 처리방침'
            break;
        default:
            break;
    }
    res.render('page.hbs', {content});
}

// 사이트맵 함수
exports.sitemap = (req, res) => {
    res.send('sitemap');
}
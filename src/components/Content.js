import React from 'react';


class Content extends React.Component {
    render(){
        return (
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">
                        참 잘했어요!
                        <small>다음은 무엇을 해볼까요?</small>
                    </h1>
                </div>
              </div>
              <div className="row">
                {/* 빈칸 맞추기 */}
                <div className="col-md-6 odo-panel">
                  <a href="#blank">
                    <img className="img-responsive" src="http://placehold.it/700x400" alt="빈칸 맞추기" />
                    <h3>빈칸 맞추기</h3>
                  </a>
                  <p>글의 원하는 단어를 빈칸으로 만들어 버립니다!</p>
                </div>

                {/* 단어 맞추기 */}
                <div className="col-md-6 odo-panel">
                  <a href="#word">
                    <img className="img-responsive" src="http://placehold.it/700x400" alt="단어 맞추기" />
                    <h3>단어 맞추기</h3>
                  </a>
                  <p>단어의 개념을 이해하는 데 도움을 줄 학습지 제작</p>
                </div>

              </div>
            </div>
        );
    }
}

export default Content;

let timeRemaining = 600; // 10分钟
const timerElement = document.getElementById('time');
const resultElement = document.getElementById('result');

const answers = {
    q1: { correct: '对', explanation: '由于网络谣言往往具有新奇性、震撼性或情感煽动性，因此它们往往比真实信息更容易吸引人们的注意并快速传播。', question: '网络谣言往往比真实信息更容易在网络上传播。' },
    q2: { correct: '错', explanation: '由于网络谣言往往具有新奇性、震撼性或情感煽动性，因此它们往往比真实信息更容易吸引人们的注意并快速传播。', question: '用户在网络空间中，只要使用匿名身份，就可以完全规避法律责任，自由发布任何内容。' },
    q3: { correct: '对', explanation: '青少年在网络上分享个人信息时，除了不泄露敏感信息外，还应谨慎分享其他个人信息，如真实姓名、地址、学校等。', question: '点击邮件中来源不明的链接可能会导致电脑中毒或信息泄露。' },
    q4: { correct: '错', explanation: '虽然网络匿名性为某些用户提供了保护隐私的机会，但这并不意味着可以完全规避法律责任。', question: '在数字化时代，网络虚拟社交相比传统社交方式，更能促进个体的社交技能发展和情感交流深度。' },
    q5: { correct: '错', explanation: '网络欺凌是一个严重的社会问题，对青少年的心理健康造成极大影响。青少年不应该选择默默忍受，而应该积极采取措施保护自己。', question: '未成年人在完成作业的情况下，可以无限制地玩游戏。' },
    q6: { correct: '错', explanation: '分享个人敏感信息如生日和家庭住址可能会使青少年面临身份盗窃和其他安全风险。', question: '有个人在不同的虚拟社交平台注册了多个账号，用这些账号给自己发布的内容点赞、评论，营造出一种很受欢迎的假象。这种行为短期内满足了他的虚荣心，一定程度上提高了他在网络社交中的声誉和影响力。总体来说是利大于弊的。' },
    q7: { correct: '对', explanation: '强密码难以破解，因为它们的组合复杂且不可预测。这增加了黑客通过猜测获取密码的难度。', question: '社交媒体和论坛与博客是不良信息传播的主要渠道。' },
    q8: { correct: '错', explanation: '不明链接可能导向恶意网站或下载含有病毒的文件，这可能导致个人信息泄露或系统损坏。', question: '青少年在参与网络社交时，面对一个看似真实但未经证实的消息（如某地区即将发生自然灾害的预警），最负责任且恰当的做法是直接向相关机构举报该消息，认为其是谣言。' },
    q9: { correct: 'A', explanation: '在社交媒体上，未经官方证实的消息可能是谣言，随意转发或相信可能会造成不必要的恐慌和不良影响。所以应该等待官方消息，不轻易相信和转发。立即转发和相信消息都是不理智的行为；向发布消息的人询问消息的真实性并不能保证得到准确的答案。', question: '在社交媒体上，看到一条关于某地区发生重大灾害的消息，但没有官方证实，你应该（  ）' },
    q10: { correct: 'C', explanation: 'A 选项，直接点击陌生链接很可能会陷入钓鱼网站或被植入恶意软件，风险极大；B 选项，短信中提供的客服电话很可能是诈骗电话，拨打后可能会遭受财产损失或个人信息泄露；C 选项，先通过正规的购物平台检查订单状态是最稳妥的做法，因为如果真的有订单问题，正规购物平台会有相应的提示和处理流程;D 选项，连接名称不同的公共 Wi-Fi 可能会落入黑客设置的陷阱网络，再点击链接更是危险重重。', question: '在使用公共 Wi-Fi 网络进行在线购物时，你完成了一笔交易后不久，收到一条来自陌生号码的短信，声称由于系统故障，你的订单出现问题，需要点击链接进行退款操作。同时，你注意到公共 Wi-Fi 网络的名称与你连接时有些许不同，但信号强度很强。此时，你应该怎么做（  ）' },
    q11: { correct: 'B', explanation: '沉迷网络虚拟社交可能损害现实社交、健康及学业工作，且过度沉迷并不会真正提高实际的社交技能。', question: '以下哪项不是沉迷网络虚拟社交可能带来的负面影响' },
    q12: { correct: 'D', explanation: '浏览并分享黄色不良信息不仅有害个人身心健康，还违反法律法规，并污染网络环境。', question: '小明在浏览网页时，不小心点击了一个包含黄色不良信息的弹窗广告，面对这种情况，以下哪种做法最不合适（  ）' },
    q13: { correct: 'D', explanation: '网络服务提供者应当对所有用户实行严格的实名制注册，无论年龄大小。A、B、C三项均直接关联到青少年网络安全的保护措施，而D项虽然提到了实名制注册，但并未特别针对青少年，而是对所有用户的要求。', question: '根据《中华人民共和国网络安全法》，以下哪项措施不是针对青少年网络安全保护而特别提出的（  ）' },
    q14: { correct: 'D', explanation: '脊柱侧弯产生的原因主要是长期不良坐姿、站姿，导致脊柱骨骼异常发育，与网络游戏成瘾无直接关系。A、B、C三项均属于网络游戏成瘾所带来的危害。', question: '根据《中华人民共和国网络安全法》，以下哪项措施不是针对青少年网络安全保护而特别提出的（ ）' },
    q15: { correct: 'C', explanation: 'A 选项花费时间但只浏览不评论不一定意味着沉迷和低素养；B 选项编造故事虽不太好但不能充分体现沉迷；C 选项完全依赖线上社交，拒绝线下活动且网络卡顿就焦虑，体现了沉迷且网络素养低，不能正确对待线上线下社交关系；D 选项关注账号不讨论不算沉迷和低素养的有力证据。脑被黑客入侵后，立即断开网络连接可以防止黑客进一步获取信息。', question: '以下哪种行为最能体现一个人可能过度沉迷虚拟社交且网络素养较低（  ）' },
    q16: { correct: 'C', explanation: 'A 选项使用外挂软件主要涉及违反规定等问题；B 选项发布聊天记录更多是道德隐私问题；C 选项客服索要银行卡号验证是常见诈骗手段，她准备提供说明缺乏基本网络安全素养，很容易遭受财产损失等风险；D 选项分享生活日常虽有风险但相对提供银行卡号风险更直接更严重。', question: '在虚拟社交中，小红沉迷于某社交 APP，以下哪种情况最能体现她网络安全素养缺失且容易陷入危险（  ）' },

    q17: { correct: ['A', 'B', 'D'], explanation: '确保你的账户安全，防止攻击者进一步访问。选择强密码并定期更换。如果攻击涉及到了你的银行账户或信用卡信息，应立即联系银行，请求暂停或冻结相关卡片，避免财产损失。向被攻击的平台报告此事，如电子邮件服务提供商、社交媒体平台等，他们可以采取措施保护其他用户不受类似攻击，也可以帮助他们采取措施防止未来的攻击。', question: '如果怀疑自己成为了网络钓鱼攻击的目标，应该采取哪些措施（  ）' },
    
    q18: { correct: ['B', 'C', 'D'], explanation: 'A选项中“自行判断信息真实性”并不可取，可能会落入网络陷阱；B、C项策略能有效防止不良信息传播；D选项遇到诈骗及时报告并保留证据是正确做法。', question: '在面对网络中黄赌毒不良信息传播时，以下哪些复杂情境下的应对策略是正确的（  ）' },

    
    q19: { correct: ['A','B', 'C', 'D'], explanation: 'A选项《中华人民共和国网络安全法》针对网络信息内容治理、个人信息保护、数据安全等领域制定了一系列规范和措施，提高了网络安全治理水平；B选项《中华人民共和国数据安全法》明确了数据的定义、数据处理的范畴以及数据安全的要求，并规定了中央国家安全领导机构、各地区、各部门以及各行业主管部门在数据安全工作中的职责，同时强调了对个人、组织数据权益的保护以及对数据开发利用的鼓励和支持；C选项《中华人民共和国未成年人保护法（2024修正）》第五章网络保护提出国家、社会、学校和家庭应当加强未成年人网络素养宣传教育，培养和提高未成年人的网络素养，增强未成年人科学、文明、安全、合理使用网络的意识和能力，保障未成年人在网络空间的合法权益；D选项《未成年人网络保护条例》规定了国家网信部门、学校、家庭以及网络产品和服务提供者、个人信息处理者、智能终端产品制造者和销售者在未成年人网络保护工作中的职责和义务。', question: '下列法律法规中涉及到网络安全内容的有哪些（  ）' },
    
    q20: { correct: ['B', 'D'], explanation: 'A选项直接在官网发布声明可能会造成不必要的恐慌和误解，并且在没有确切证据前这样做不合适；B选项向负责老师汇报并提供证据是理性且符合流程的做法；C选项私自进入投票系统后台属于违反网络安全规则和侵犯隐私的行为；D选项联合同学向网络安全部门请求调查是积极维护评选公正性和网络安全的正确做法。', question: '学校正在进行优秀学生作品线上评选活动，小李发现有部分作品的投票数据在短时间内出现异常增长，他怀疑存在网络刷票行为影响评选公正性。如果他想从网络安全素养的角度正确处理此事，他可以（  ）' }
};


function startTimer() {
    const timer = setInterval(() => {
        timeRemaining--;
        timerElement.innerText = timeRemaining;
        if (timeRemaining <= 0) {
            clearInterval(timer);
            alert('时间到！自动提交答案。');
            submitQuiz();
        }
    }, 1000);
}

function submitQuiz() {
    let score = 0;
    let incorrectAnswers = [];

    const form = document.getElementById('quizForm');
    const answerCategories = {
        '一、判断题': ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'],
        '二、单选题': ['q9', 'q10', 'q11', 'q12', 'q13', 'q14', 'q15', 'q16'],
        '三、多选题': ['q17', 'q18', 'q19', 'q20']
    };
    
    let questionCounter = 1;

    for (let section in answerCategories) {
        const questions = answerCategories[section];
        questions.forEach(question => {
            const selectedElements = form[question] ? Array.from(form[question]) : [];
            const selected = selectedElements.filter(input => input.checked).map(input => input.value);
            const correctAnswer = answers[question].correct;

            if (selected.length === 0) {
                // 没有选择任何答案，记录为未作答
                incorrectAnswers.push({
                    question: `${section} ${questionCounter}：${answers[question].question}`,
                    userAnswer: '未作答',
                    correctAnswer: Array.isArray(correctAnswer) ? correctAnswer.join(', ') : correctAnswer,
                    explanation: answers[question].explanation
                });
            } else if (Array.isArray(correctAnswer)) {
                // 处理多选题
                const correctSelected = correctAnswer.filter(ans => selected.includes(ans));
                const isAllCorrect = correctSelected.length === correctAnswer.length;
                const isExactMatch = isAllCorrect && selected.length === correctAnswer.length;

                if (isExactMatch) {
                    score += 5; // 全部选对得满分
                } else if (correctSelected.length >= 2) {
                    score += 2; // 至少选中两个正确答案得2分
                    incorrectAnswers.push({
                        question: `${section} ${questionCounter}：${answers[question].question}`,
                        userAnswer: selected.join(', '),
                        correctAnswer: correctAnswer.join(', '),
                        explanation: answers[question].explanation
                    });
                } else {
                    incorrectAnswers.push({
                        question: `${section} ${questionCounter}：${answers[question].question}`,
                        userAnswer: selected.join(', '),
                        correctAnswer: correctAnswer.join(', '),
                        explanation: answers[question].explanation
                    });
                }
            } else {
                // 区分判断题和单选题
                let userAnswer = '';
                let isCorrect = false;

                if (section === '一、判断题') {
                    // 判断题处理
                    userAnswer = selected[0] === 'true' ? '正确' : '错误';
                    isCorrect = userAnswer === correctAnswer;
                } else if (section === '二、单选题') {
                    // 单选题处理
                    userAnswer = selected[0];
                    isCorrect = userAnswer === correctAnswer;
                }

                if (isCorrect) {
                    score += 5; // 每题5分
                } else {
                    incorrectAnswers.push({
                        question: `${section} ${questionCounter}：${answers[question].question}`,
                        userAnswer: userAnswer,
                        correctAnswer: correctAnswer,
                        explanation: answers[question].explanation
                    });
                }
            }

            questionCounter++;
        });
        questionCounter = 1; // 重置计数器为下一部分
    }

    // 存储结果到 localStorage
    localStorage.setItem('score', score);
    localStorage.setItem('incorrectAnswers', JSON.stringify(incorrectAnswers));

    // 跳转到结果页面
    window.location.href = 'result.html';
}


document.getElementById('submit').addEventListener('click', submitQuiz);
startTimer();

let timeRemaining = 600; // 10分钟
const timerElement = document.getElementById('time');
const resultElement = document.getElementById('result');

const answers = {
    q1: { correct: '错误', explanation: '防火墙虽然能阻挡很多网络攻击，但没有任何一种安全措施可以完全防止所有类型的网络攻击。', question: '防火墙可以完全防止网络攻击。' },
    q2: { correct: '正确', explanation: '由于网络谣言往往具有新奇性、震撼性或情感煽动性，因此它们往往比真实信息更容易吸引人们的注意并快速传播。', question: '网络谣言往往比真实信息更容易在网络上传播。' },
    q3: { correct: '错误', explanation: '青少年在网络上分享个人信息时，除了不泄露敏感信息外，还应谨慎分享其他个人信息，如真实姓名、地址、学校等。', question: '青少年在网络上分享个人信息时，只需要注意不泄露敏感信息如密码和银行账号即可。' },
    q4: { correct: '错误', explanation: '虽然网络匿名性为某些用户提供了保护隐私的机会，但这并不意味着可以完全规避法律责任。', question: '青少年在网络空间中，只要使用匿名身份，就可以完全规避法律责任，自由发布任何内容。' },
    q5: { correct: '错误', explanation: '网络欺凌是一个严重的社会问题，对青少年的心理健康造成极大影响。青少年不应该选择默默忍受，而应该积极采取措施保护自己。', question: '青少年在面对网络欺凌时，应该选择默默忍受，因为公开反抗可能会引来更多的攻击。' },
    q6: { correct: '错误', explanation: '分享个人敏感信息如生日和家庭住址可能会使青少年面临身份盗窃和其他安全风险。', question: '在社交媒体上公开自己的生日和家庭住址是安全的。' },
    q7: { correct: '正确', explanation: '强密码难以破解，因为它们的组合复杂且不可预测。这增加了黑客通过猜测获取密码的难度。', question: '使用强密码（包含大小写字母、数字及特殊字符）可以有效防止账户被盗用。' },
    q8: { correct: '正确', explanation: '不明链接可能导向恶意网站或下载含有病毒的文件，这可能导致个人信息泄露或系统损坏。', question: '点击邮件中来源不明的链接可能会导致电脑中毒或信息泄露。' },
    q9: { correct: 'C', explanation: '官方新闻网站通常会经过严格的审核和把关，不是网络谣言传播的主要渠道。', question: '以下哪项不是网络谣言传播的主要渠道？' },
    q10: { correct: 'C', explanation: '网络交流中，遇到与自己观点不同的言论是很常见的情况，应该学会尊重他人的观点。', question: '青少年在网络交流中，遇到与自己观点截然不同的言论时，最恰当的做法是：' },
    q11: { correct: 'C', explanation: '面对看似真实但未经证实的消息时，最负责任的做法是先验证消息的真实性。', question: '青少年在参与网络社交时，面对一个看似真实但未经证实的消息，最负责任且恰当的做法是：' },
    q12: { correct: 'B', explanation: '使用同一密码会使得所有账户都处于风险之中。', question: '以下哪项措施不能有效提高在线安全性？' },
    q13: { correct: 'D', explanation: '面对要求提供个人信息的电子邮件时，采取谨慎的态度和正确的行动至关重要。', question: '当收到要求提供个人信息的电子邮件时，应该采取的正确行动是什么？' },
    q14: { correct: 'C', explanation: '不连接任何没有密码的免费 Wi-Fi 是最安全的做法。', question: '在公共场所使用免费 Wi-Fi 时，下列哪种做法是最安全的？' },
    q15: { correct: 'A', explanation: '发现电脑被黑客入侵后，立即断开网络连接可以防止黑客进一步获取信息。', question: '当你发现自己的电脑被黑客入侵，以下做法正确的是（ ）' },
    q16: { correct: 'C', explanation: '在社交媒体上，未经官方证实的消息可能是谣言，应该等待官方消息。', question: '在社交媒体上，看到一条关于某地区发生重大灾害的消息，但没有官方证实，你应该（ ）' },
    q17: { correct: ['A', 'B', 'D'], explanation: '定期更新、使用强密码、不打开未知邮件附件等措施可以提高安全性。', question: '以下哪些措施可以提高个人计算机的安全性？' },
    q18: { correct: ['A', 'B', 'C', 'D'], explanation: '部署并维护一套多层次的安全防护系统是构建坚不可摧的电脑安全防护体系的基础。', question: '为了构建坚不可摧的电脑安全防护体系，应当掌握以下哪些高级防御策略与技术？' },
    q19: { correct: ['B', 'C', 'D'], explanation: '阅读应用程序的隐私政策、限制广告追踪等措施有助于保护个人隐私。', question: '以下哪些行为有助于保护个人隐私？' },
    q20: { correct: ['A', 'B', 'D'], explanation: '确保账户安全，防止攻击者进一步访问。', question: '如果怀疑自己成为了网络钓鱼攻击的目标，应该采取哪些措施？' }
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
    const sectionTitles = ['一、判断题', '二、单选题', '三、多选题'];
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
                // 没有选择任何答案，显示“未作答”
                incorrectAnswers.push({
                    question: `${section} ${questionCounter}：${answers[question].question}`,
                    userAnswer: '未作答',
                    correctAnswer: Array.isArray(correctAnswer) ? correctAnswer.join(', ') : correctAnswer,
                    explanation: answers[question].explanation
                });
            } else if (Array.isArray(correctAnswer)) {
                // 处理多选题的逻辑
                const correctSelected = correctAnswer.filter(ans => selected.includes(ans));
                if (correctSelected.length === correctAnswer.length && selected.length === correctAnswer.length) {
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
                // 处理判断题和单选题
                let userAnswer = '';
                if (question.startsWith('q1') || question.startsWith('q2') || question.startsWith('q3') || question.startsWith('q4') ||
                    question.startsWith('q5') || question.startsWith('q6') || question.startsWith('q7') || question.startsWith('q8')) {
                    // 判断题
                    userAnswer = selected[0] === 'true' ? '正确' : '错误';
                } else {
                    // 单选题
                    userAnswer = selected[0];
                }

                if (userAnswer === correctAnswer) {
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
        questionCounter = 1; // Reset question counter for the next section
    }

    // 存储结果到 localStorage
    localStorage.setItem('score', score);
    localStorage.setItem('incorrectAnswers', JSON.stringify(incorrectAnswers));

    // 跳转到结果页面
    window.location.href = 'result.html';
}

document.getElementById('submit').addEventListener('click', submitQuiz);
startTimer();

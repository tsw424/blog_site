from threading import Thread

from flask import render_template, current_app
from flask_mail import Message

from .__init__ import mail


def _send_async_email(app, msg):  # 异步发邮件
    with app.app_context():
        mail.send(msg)


def send_email(to, subject, template, **kwargs):
    """

    :param to:
    :param subject: 邮件标题
    :param template:
    :param kwargs:
    :return:
    """
    app = current_app._get_current_object()
    msg = Message(app.config['FLASKY_MAIL_SUBJECT_PREFIX'] + subject,
                  sender=app.config['FLASKY_MAIL_SENDER'], recipients=[to])
    msg.body = render_template(template + '.txt', **kwargs)
    msg.html = render_template(template + '.html', **kwargs)
    thr = Thread(target=_send_async_email, args=[app, msg])
    thr.start()
    return thr

<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quiz</title>
  <link rel="shortcut icon" href="./assets/logo.png" type="image/x-icon">
  <link rel="stylesheet" href="./css/style.min.css">
  <link rel="stylesheet" href="./css/uikit.css">
  <script src="./js/uikit.min.js"></script>
  <script src="./js/uikit-icons.min.js"></script>
 
</head>

<body>
  <div id="loader-wrapper">
    <div id="loader"></div>
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>
  </div>
  <button id="user-click" href="#modal-user" uk-toggle></button>
  <div id="modal-user" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog uk-margin-auto-vertical uk-animation-scale-up">
      <div uk-height-viewport>
        <div class="uk-modal-header">
          <h2 class="uk-modal-title">Регистрация</h2>
        </div>
        <div class="uk-modal-body">
          <form class="form">
            <div class="uk-margin uk-width-1-1">
              <div class="uk-inline width">
                <span class="uk-form-icon" uk-icon="icon: user"></span>
                <input type="text" id="user-name" class="uk-input" required minlength="4" maxlength="30" size="100"
                  placeholder="Ф.И пользователя" />
              </div>
            </div>
            <div class="uk-margin uk-width-1-1">
              <div class="uk-inline width">
                <span class="uk-form-icon" uk-icon="icon: mail"></span>
                <input id="user-email" class="uk-input" type="text" required minlength="4" maxlength="30" size="100"
                  placeholder="Электронная почта" />
              </div>
            </div>
            <button id="continue" class="uk-button uk-button-primary" type="submit">Продолжать</button>
          </form>
        </div>

      </div>
    </div>
  </div>
  </div>

  <section class="navbar">
    <nav class="uk-navbar-container" uk-navbar="mode: click">
      <div class="nav-overlay uk-navbar-left">
        <a class="uk-navbar-item uk-logo" href="#modal-user">C++</a>
      </div>
      <div class="nav-overlay uk-navbar-right">
        <span class="uk-navbar-toggle" uk-icon="icon: user" href="#modal-center" uk-toggle></span>
        <span class="uk-navbar-toggle" uk-icon="icon: cog" href="#modal-sections" uk-toggle></span>
      </div>
    </nav>
  </section>
  <section class="modals">
    <div id="modal-sections" uk-modal>
      <div class="uk-modal-dialog uk-margin-auto-vertical uk-animation-scale-up">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <div class="uk-modal-header">
          <h2 class="uk-modal-title">Настройки</h2>
        </div>
        <div class="uk-modal-body">
          <form class="form">
            <div class="uk-margin uk-width-1-1">
              <div class="uk-inline width">
                <span class="uk-form-icon" uk-icon="icon: user"></span>
                <input id="form-info" class="uk-input" type="text" placeholder="Изменить логин" />
              </div>
            </div>
            <div class="uk-margin uk-width-1-1">
              <div class="width" uk-form-custom="target: true">
                <span class="uk-form-icon" uk-icon="icon: camera"></span>
                <input id="form-img" type="file" />
                <input class="uk-input" type="text" placeholder="Выбрать фото" disabled />
              </div>
            </div>
          </form>
        </div>
        <div class="uk-modal-footer uk-text-right">
          <button class="uk-button uk-button-default uk-modal-close" type="button">Закрыть</button>
          <button id="save" class="uk-button uk-button-primary uk-modal-close" type="button">Сохранить</button>
        </div>
      </div>
    </div>
    <div id="modal-center" class="uk-flex-top" uk-modal>
      <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-animation-scale-up">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <div class="user-info">
          <img id="user-img" class="user-img" src="" alt="Border circle" />
          <h2 class="user-login">Rixsiboyev Sirojiddin</h2>
        </div>
      </div>
    </div>
  </section>
  <div id="app" class="card-content uk-child-width-1-2@m uk-child-width-1-3@l uk-grid"></div>
  <div class="full" tabindex="0">
    <div id="quiz" class="quiz_card uk-animation-scale-up">

      <div class="quiz_card_header">
        <span id="quiz_info" class="quiz_card_info"></span>
        <div id="quiz_pages" class="quiz_card_pages"></div>
      </div>

      <div class="quiz_card_body">
        <span id="quiz_question" class="quiz_card_question"></span>
        <div class="quiz_card_buttons">
          <div id="buttons" class="quiz_card_buttons_group"></div>
        </div>
      </div>

      <div class="progress">
        <span class="bar"><span class="fill"></span></span>
      </div>

      <div class="quiz_card_footer">
        <button id="start_button" class="btn success_btn left">Начать</button>
        <button id="select_button" disabled class="btn success_btn left">Проверить</button>
        <button id="next_button" class="btn default_btn right">Далее</button>
        <button id="repeat_button" class="btn success_btn left">Повторить</button>
        <button id="quit_button" class="btn danger_btn right">Выйти</button>
      </div>
    </div>
  </div>
  <footer>
		<h2>Контактная форма</h2>
		<div class="form-container">
			<div class="note"></div>
			<div class="fields">
				<form class="ajax-contact-form" action="">
					<p><input type="text" name="name" value="" placeholder="Имя"></p>
					<div class="row">
						<div class="col"><input type="tel" name="tel" value="" placeholder="Телефон"></div>
						<div class="col"><input type="email" name="email" value="" placeholder="E-mail"></div>
						</div>
					<label>Текст</label>
					<textarea name="message" cols="40" rows="3"></textarea>
					<input type="submit" name="submit" class="form-container__btn" value="Отправить">
				</form>
			</div>
		</div>
  </footer>
  <script
  src="https://code.jquery.com/jquery-1.12.4.js"
  integrity="sha256-Qw82+bXyGq6MydymqBxNPYTaUXXq7c8v3CwiYwLLNXU="
  crossorigin="anonymous"></script>
	<script src="./js/contactform.js"></script>
  <script type="module" src="./js/main.js"></script>
  <script type="module" src="./js/quiz.min.js"></script>
</body>

</html>
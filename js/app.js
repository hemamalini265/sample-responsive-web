   function createTrigger(text, title) {
            var $element = $("<span>", {
                "title": title,
                "class": "password-toggle"
            });
            $element.addClass("password-toggle");
            $element.text(text);

            return $element;
        }

        function toggle($field, triggers) {
            switch ($field.attr("type")) {
                case "password":
                    $field.attr("type", "text");
                    break;
                case "text":
                    $field.attr("type", "password");
                    break;
            }
            for (var i = 0; i < triggers.length; i++) {
                triggers[i].toggle();
            }

            $field.focus();
        }

        function initPasswordField($field) {
            $field.attr("autocomplete", "off");

            var triggers = [
                createTrigger("Show", "Show password"),
                createTrigger("Hide", "Hide password").hide()
            ];

            var $container = $("<div>", {
                "class": "password-field"
            });

            for (var i = 0; i < triggers.length; i++) {
                $container.append(triggers[i]);
                triggers[i].click(function (event) {
                    toggle($field, triggers);
                });
            }

            ["input-sm", "input-lg"].forEach(function (className) {
                if ($field.hasClass(className)) {
                    $container.addClass(className.replace("input-", "password-field-"));
                }
            });

            $field.before($container);
            $container.append($field);
        }

        $('input[type="password"]').each(function (index, field) {
            initPasswordField($(field));
        });
		
		$("#openAccount, #goToMain").click(function() {
			 $("#mainDiv").toggle("slide");
			 $("#openAccountDiv").toggle("slide");
		});
		
		$("#createAccount").click(function() {
			if($('#openAccountDiv:visible').length == 0) {
				$("#mainDiv").toggle("slide");
				$("#openAccountDiv").toggle("slide");
			}
			
		});
		
		$("#showLogin, #showForgetPassword").click(function() {
			$("#forgetPasswordForm").toggle("slide");
			 $("#loginForm").toggle("slide");
		});

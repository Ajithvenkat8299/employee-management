import React, { useRef, useState } from "react";

async function validate(refs, form) {
  for (const [attribute, ref] of Object.entries(refs.current)) {
    var errors;
    if (ref.validate) {
      errors = await ref.validate(get(form, attribute));
    }
    if (!isEmpty(errors)) {
      console.log(errors);
      return false;
    }
  }
  return true;
}

export default function Signup(props) {
  const { setAuthType } = props;
  const [form, setForm] = useState({});
  const [showPassword, setShowPassword] = useState();

  const refs = useRef({});

  const updateForm = (updates) => {
    const copy = { ...form };
    for (const [key, value] of Object.entries(updates)) {
      set(copy, key, value);
    }
    setForm(copy);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const ok = await validate(refs, form);
    if (!ok) {
      return;
    }
    console.log(form);
  };

  const fields = [
    {
      component: "custom",
      customComponent: () => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Avatar style={{ backgroundColor: red[500], color: "white" }}>
            <LockOutlined />
          </Avatar>
        </div>
      )
    },
    {
      component: "display-text",
      title: "Sign up",
      titleProps: {
        style: {
          fontSize: "20px",
          fontWeight: "bold"
        }
      },
      titleContainerProps: {
        style: {
          justifyContent: "center"
        }
      }
    },
    {
      attribute: "firstName",
      component: "text-field",
      label: "First Name",
      props: {
        required: true
      },
      col: {
        xs: 6
      },
      validations: {
        required: true
      }
    },
    {
      attribute: "lastName",
      component: "text-field",
      label: "Last Name",
      props: {
        required: true
      },
      col: {
        xs: 6
      },
      validations: {
        required: true
      }
    },
    {
      attribute: "email",
      component: "text-field",
      label: "Email",
      props: {
        required: true
      },
      validations: {
        required: true,
        email: true
      }
    },
    {
      attribute: "password",
      component: "text-field",
      label: "Password",
      props: {
        type: showPassword ? "text" : "password",
        InputProps: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
          style: {
            paddingRight: 0
          }
        },
        required: true
      },
      validations: {
        required: true,
        min: 8,
        matches: ["/[a-z]/i", "At least 1 lowercase or uppercase letter"],
        test: {
          name: "specialChar",
          test: (value) =>
            /[0-9~!@#$%^&*()_+\-={}|[\]\\:";'<>?,./]/.test(value),
          message: "At least 1 number or special character"
        }
      }
    },
    {
      attribute: "remember",
      component: "checkbox-group",
      options: [
        {
          label: "Remember Me",
          value: true
        }
      ],
      optionConfig: {
        key: "label",
        label: "label",
        value: "value"
      }
    }
  ];

}
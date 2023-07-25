import { Container } from './styles';

export function Ingredients({ isNew, value, placeholder, onChange, onClick }) {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        readOnly={!isNew}
        onChange={onChange}
      />

      <button type="button" onClick={onClick}>
        {isNew ? (
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 4C0 3.81591 0.149238 3.66667 0.333333 3.66667H7.66667C7.85076 3.66667 8 3.81591 8 4C8 4.18409 7.85076 4.33333 7.66667 4.33333H0.333333C0.149238 4.33333 0 4.18409 0 4Z"
              fill="#7C7C8A"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 0C4.18409 0 4.33333 0.149238 4.33333 0.333333V7.66667C4.33333 7.85076 4.18409 8 4 8C3.81591 8 3.66667 7.85076 3.66667 7.66667V0.333333C3.66667 0.149238 3.81591 0 4 0Z"
              fill="#7C7C8A"
            />
          </svg>
        ) : (
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.88284 0.117157C8.03905 0.273367 8.03905 0.526633 7.88284 0.682843L0.682843 7.88284C0.526633 8.03905 0.273367 8.03905 0.117157 7.88284C-0.0390524 7.72663 -0.0390524 7.47337 0.117157 7.31716L7.31716 0.117157C7.47337 -0.0390524 7.72663 -0.0390524 7.88284 0.117157Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.117157 0.117157C0.273367 -0.0390524 0.526633 -0.0390524 0.682843 0.117157L7.88284 7.31716C8.03905 7.47337 8.03905 7.72663 7.88284 7.88284C7.72663 8.03905 7.47337 8.03905 7.31716 7.88284L0.117157 0.682843C-0.0390524 0.526633 -0.0390524 0.273367 0.117157 0.117157Z"
              fill="white"
            />
          </svg>
        )}
      </button>
    </Container>
  );
}

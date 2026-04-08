export function NotFoundPage() {
  return (
    <main
      style={{
        height: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
      }}
    >
      <p className="text muted centered">
        Страница не найдена или в разработке. Пожалуйста вернитесь назад
      </p>
    </main>
  );
}

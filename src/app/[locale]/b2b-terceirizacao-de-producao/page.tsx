"use client";

import HeaderPage from "~/components/headerPage";
import BaseLayout from "../base";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import Loading from "~/components/loading";
import { config } from "~/config/config";
import { useTranslations } from "next-intl";

type Inputs = {
  nome: string;
  celular: string;
  email: string;
  mensagem: string;
};

function B2BTerceirizacao() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const t = useTranslations("Menu");
  const tForm = useTranslations("Form");
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const objToSend = {
      from: "workflow@topcau.com.br",
      to: "comercial@topcau.com.br",
      subject: "Formulário B2B Terceirização de produção",
      html: `<p>Dados enviados:</p><p>Nome: ${data.nome}</p><p>Celular: ${data.celular}</p><p>Email: ${data.email}</p><p>Mensagem: ${data.mensagem}</p>`,
    };
    setSending(true);
    await fetch(config.urlApiEmail, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objToSend),
    });
    setSending(false);
    setSent(true);
  };
  return (
    <BaseLayout>
      <HeaderPage title={t("menu12")} subtitle="" />
      <div className="box-contato-page">
        <div className="info-contato">
          <h4>B2B Terceirização de produção </h4>
          <h5>comercial@topcau.com.br</h5>
        </div>
        <div className="form-contato">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="box-campo">
              <p>
                <input
                  placeholder={tForm("name")}
                  type="text"
                  {...register("nome", { required: "Nome é obrigatório." })}
                />
                {errors.nome && (
                  <span className="error" role="alert">
                    {errors.nome?.message}
                  </span>
                )}
              </p>
            </div>
            <div className="box-campo">
              <p>
                <input
                  placeholder={tForm("mobile")}
                  type="text"
                  {...register("celular", {
                    required: "Celular é obrigatório.",
                  })}
                />
                {errors.celular && (
                  <span className="error" role="alert">
                    {errors.celular?.message}
                  </span>
                )}
              </p>
            </div>
            <div className="box-campo">
              <p>
                <input
                  placeholder={tForm("email")}
                  type="email"
                  {...register("email", {
                    required: "Email é obrigatório.",
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <span className="error" role="alert">
                    {errors.email?.message}
                  </span>
                )}
              </p>
            </div>
            <div className="box-campo">
              <p>
                <textarea
                  placeholder={tForm("message")}
                  {...register("mensagem", {
                    required: "Mensagem é obrigatório.",
                  })}
                ></textarea>
                {errors.mensagem && (
                  <span className="error" role="alert">
                    {errors.mensagem?.message}
                  </span>
                )}
              </p>
            </div>
            {!sending && !sent && <p>
              <input type="submit" value={tForm("send")} />
            </p>}
            {sending && <div className="box-loading-form">
              <Loading />
            </div>}
            {sent && <div className="feedback-form">
            {tForm("success")}
            </div>}
          </form>
        </div>
      </div>
    </BaseLayout>
  );
}

export default B2BTerceirizacao;

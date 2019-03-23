import React from 'react';

function Container({
  children,
  title,
  isInfo,
  isDark,
  isPrimary,
  isLink,
  isSuccess,
  isWarning,
  isDanger,
}) {
  let classes = 'message ';
  classes += isDanger ? ' is-danger' : '';
  classes += isDark ? ' is-dark' : '';
  classes += isInfo ? ' is-info' : '';
  classes += isPrimary ? ' is-primary' : '';
  classes += isLink ? ' is-link' : '';
  classes += isSuccess ? ' is-success' : '';
  classes += isWarning ? ' is-warning' : '';

  return (
    <article className={classes}>
      <div className="message-header">
        <p>{title}</p>
        <button className="delete" aria-label="delete" />
      </div>
      <div className="message-body">{children}</div>
    </article>
  );
}

export default Container;

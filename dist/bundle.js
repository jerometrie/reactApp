(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comment = function (_React$Component) {
	_inherits(Comment, _React$Component);

	function Comment() {
		_classCallCheck(this, Comment);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Comment).apply(this, arguments));
	}

	_createClass(Comment, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "comment" },
				React.createElement(
					"p",
					{ className: "comment-header" },
					this.props.author
				),
				React.createElement(
					"p",
					{ className: "comment-body" },
					this.props.body
				),
				React.createElement(
					"div",
					{ className: "comment-footer" },
					React.createElement(
						"a",
						{ href: "#", className: "comment-footer-delete" },
						"Delete comment"
					)
				)
			);
		}
	}]);

	return Comment;
}(React.Component);

var CommentBox = function (_React$Component2) {
	_inherits(CommentBox, _React$Component2);

	function CommentBox() {
		_classCallCheck(this, CommentBox);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(CommentBox).apply(this, arguments));
	}

	_createClass(CommentBox, [{
		key: "render",
		value: function render() {

			var comments = this._getComments();

			return React.createElement(
				"div",
				{ className: "comment-box" },
				React.createElement(
					"h3",
					null,
					"Comment"
				),
				React.createElement(
					"h4",
					{ className: "comment-count" },
					this._getCommentsTitle(comments.length)
				),
				React.createElement(
					"div",
					{ className: "comment-list" },
					comments
				)
			);
		}
	}, {
		key: "_getComments",
		value: function _getComments() {

			var commentList = [{ id: 1, author: "Morgan", body: "Great picture!" }, { id: 2, author: "Bender", body: "Excellent stuff!" }];

			return commentList.map(function (comment) {
				return React.createElement(Comment, {
					author: comment.author, body: comment.body, key: comment.id });
			});
		}
	}, {
		key: "_getCommentsTitle",
		value: function _getCommentsTitle(commentCount) {
			if (commentCount === 0) {
				return "No comments yet.";
			} else if (commentCount === 1) {
				return "1 comment";
			} else {
				return commentCount + " comments";
			}
		}
	}]);

	return CommentBox;
}(React.Component);

ReactDOM.render(React.createElement(CommentBox, null), document.getElementById('comment-box'));

},{}]},{},[1]);

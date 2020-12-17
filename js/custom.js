$(document).ready(function () {
  $(function () {
    $(".preloader").fadeOut();
    $("#side-menu");
  });
  // Theme settings
  //Open-Close-right sidebar
  $(".right-side-toggle").click(function () {
    $(".right-sidebar").slideDown(50);
    $(".right-sidebar").toggleClass("shw-rside");
    // Fix header
    $(".fxhdr").click(function () {
      $("body").toggleClass("fix-header");
    });
    // Fix sidebar
    $(".fxsdr").click(function () {
      $("body").toggleClass("fix-sidebar");
    });
    // Service panel js
    if ($("body").hasClass("fix-header")) {
      $(".fxhdr").attr("checked", true);
    } else {
      $(".fxhdr").attr("checked", false);
    }
    if ($("body").hasClass("fix-sidebar")) {
      $(".fxsdr").attr("checked", true);
    } else {
      $(".fxsdr").attr("checked", false);
    }
  });
  //Loads the correct sidebar on window load,
  //collapses the sidebar on window resize.
  // Sets the min-height of #page-wrapper to window size
  $(function () {
    $(window).bind("load resize", function () {
      topOffset = 60;
      width =
        this.window.innerWidth > 0 ? this.window.innerWidth : this.screen.width;
      if (width < 768) {
        $("div.navbar-collapse").addClass("collapse");
        topOffset = 100; // 2-row-menu
      } else {
        $("div.navbar-collapse").removeClass("collapse");
      }
      height =
        (this.window.innerHeight > 0
          ? this.window.innerHeight
          : this.screen.height) - 1;
      height = height - topOffset;
      if (height < 1) height = 1;
      if (height > topOffset) {
        $("#page-wrapper").css("min-height", height + "px");
      }
    });
    var url = window.location;
    var element = $("ul.nav a")
      .filter(function () {
        return this.href == url || url.href.indexOf(this.href) == 0;
      })
      .addClass("active")
      .parent()
      .parent()
      .addClass("in")
      .parent();
    if (element.is("li")) {
      element.addClass("active");
    }
  });
  // This is for resize window
  $(function () {
    $(window).bind("load resize", function () {
      width =
        this.window.innerWidth > 0 ? this.window.innerWidth : this.screen.width;
      if (width < 1170) {
        $("body").addClass("content-wrapper");
        $(".open-close i").removeClass("icon-arrow-left-circle");
        $(".sidebar")
          .css("overflow", "inherit")
          .parent()
          .css("overflow", "visible");
        $(".logo span").hide();
      } else {
        $("body").removeClass("content-wrapper");
        $(".open-close i").addClass("icon-arrow-left-circle");
        $(".logo span").show();
      }
    });
  });
  // This is for click on open close button
  // Sidebar open close
  $(".open-close").on("click", function () {
    if ($("body").hasClass("content-wrapper")) {
      $("body").trigger("resize");
      $(".sidebar-nav, .slimScrollDiv")
        .css("overflow", "hidden")
        .parent()
        .css("overflow", "visible");
      $("body").removeClass("content-wrapper");
      $(".open-close i").addClass("icon-arrow-left-circle");
      $(".logo span").show();
    } else {
      $("body").trigger("resize");
      $(".sidebar-nav, .slimScrollDiv")
        .css("overflow", "inherit")
        .parent()
        .css("overflow", "visible");
      $("body").addClass("content-wrapper");
      $(".open-close i").removeClass("icon-arrow-left-circle");
      $(".logo span").hide();
    }
  });
  // Collapse Panels
  (function ($, window, document) {
    var panelSelector = '[data-perform="panel-collapse"]';
    $(panelSelector).each(function () {
      var $this = $(this),
        parent = $this.closest(".panel"),
        wrapper = parent.find(".panel-wrapper"),
        collapseOpts = {
          toggle: false,
        };
      if (!wrapper.length) {
        wrapper = parent
          .children(".panel-heading")
          .nextAll()
          .wrapAll("<div/>")
          .parent()
          .addClass("panel-wrapper");
        collapseOpts = {};
      }
      wrapper
        .collapse(collapseOpts)
        .on("hide.bs.collapse", function () {
          $this.children("i").removeClass("fa fa-minus").addClass("fa fa-plus");
        })
        .on("show.bs.collapse", function () {
          $this.children("i").removeClass("fa fa-plus").addClass("fa fa-minus");
        });
    });
    $(document).on("click", panelSelector, function (e) {
      e.preventDefault();
      var parent = $(this).closest(".panel");
      var wrapper = parent.find(".panel-wrapper");
      wrapper.collapse("toggle");
    });
  })(jQuery, window, document);
  // Remove Panels
  (function ($, window, document) {
    var panelSelector = '[data-perform="panel-dismiss"]';
    $(document).on("click", panelSelector, function (e) {
      e.preventDefault();
      var parent = $(this).closest(".panel");
      removeElement();
      function removeElement() {
        var col = parent.parent();
        parent.remove();
        col
          .filter(function () {
            var el = $(this);
            return el.is('[class*="col-"]') && el.children("*").length === 0;
          })
          .remove();
      }
    });
  })(jQuery, window, document);
});
// Login and recover password
$("#to-recover").click(function () {
  $("#loginform").slideUp();
  $("#recoverform").fadeIn();
});
